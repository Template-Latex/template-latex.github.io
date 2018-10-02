package LatexIndent::BackUpFileProcedure;
#	This program is free software: you can redistribute it and/or modify
#	it under the terms of the GNU General Public License as published by
#	the Free Software Foundation, either version 3 of the License, or
#	(at your option) any later version.
#
#	This program is distributed in the hope that it will be useful,
#	but WITHOUT ANY WARRANTY; without even the implied warranty of
#	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#	GNU General Public License for more details.
#
#	See http://www.gnu.org/licenses/.
#
#	Chris Hughes, 2017
#
#	For all communication, please visit: https://github.com/cmhughes/latexindent.pl
use strict;
use warnings;
use LatexIndent::GetYamlSettings qw/%masterSettings/;
use LatexIndent::Switches qw/%switches/;
use LatexIndent::LogFile qw/$logger/;
use File::Basename;             # to get the filename and directory path
use File::Copy;                 # to copy the original file to backup (if overwrite option set)
use Exporter qw/import/;
our @EXPORT_OK = qw/create_back_up_file/;

# copy main file to a back up in the case of the overwrite switch being active

sub create_back_up_file{
    my $self = shift;

    return unless($switches{overwrite});

    # if we want to over write the current file create a backup first
    $logger->info("*Backup procedure (-w flag active):");

    my $fileName = ${$self}{fileName};

    # grab the file extension preferences
    my %fileExtensionPreference= %{$masterSettings{fileExtensionPreference}};

    # sort the file extensions by preference 
    my @fileExtensions = sort { $fileExtensionPreference{$a} <=> $fileExtensionPreference{$b} } keys(%fileExtensionPreference);

    # backup file name is the base name
    my $backupFile = basename(${$self}{fileName},@fileExtensions);
    
    # add the user's backup directory to the backup path
    $backupFile = "${$self}{cruftDirectory}/$backupFile";

    # local variables, determined from the YAML settings
    my $onlyOneBackUp = $masterSettings{onlyOneBackUp};
    my $maxNumberOfBackUps = $masterSettings{maxNumberOfBackUps};
    my $cycleThroughBackUps= $masterSettings{cycleThroughBackUps};
    my $backupExtension= $masterSettings{backupExtension};
    
    # if both ($onlyOneBackUp and $maxNumberOfBackUps) then we have
    # a conflict- er on the side of caution and turn off onlyOneBackUp
    if($onlyOneBackUp and $maxNumberOfBackUps>1) {
        $logger->warn("*onlyOneBackUp=$onlyOneBackUp and maxNumberOfBackUps: $maxNumberOfBackUps");
        $logger->warn("setting onlyOneBackUp=0 which will allow you to reach $maxNumberOfBackUps back ups");
        $onlyOneBackUp = 0;
    }
    
    # if the user has specified that $maxNumberOfBackUps = 1 then
    # they only want one backup
    if($maxNumberOfBackUps==1) {
        $onlyOneBackUp=1 ;
        $logger->info("you set maxNumberOfBackUps=1, so I'm setting onlyOneBackUp: 1 ");
    } elsif($maxNumberOfBackUps<=0 and !$onlyOneBackUp) {
        $onlyOneBackUp=0 ;
        $maxNumberOfBackUps=-1;
    }
    
    # if onlyOneBackUp is set, then the backup file will
    # be overwritten each time
    if($onlyOneBackUp) {
        $backupFile .= $backupExtension;
        $logger->info("copying $fileName to $backupFile");
        $logger->info("$backupFile was overwritten (see onlyOneBackUp)") if (-e $backupFile);
    } else {
        # start with a backup file .bak0 (or whatever $backupExtension is present)
        my $backupCounter = 0;
        $backupFile .= $backupExtension.$backupCounter;
    
        # if it exists, then keep going: .bak0, .bak1, ...
        while (-e $backupFile or $maxNumberOfBackUps>1) {
            if($backupCounter==$maxNumberOfBackUps) {
                $logger->info("maxNumberOfBackUps reached ($maxNumberOfBackUps, see maxNumberOfBackUps)");
    
                # some users may wish to cycle through back up files, e.g:
                #    copy myfile.bak1 to myfile.bak0
                #    copy myfile.bak2 to myfile.bak1
                #    copy myfile.bak3 to myfile.bak2
                #
                #    current back up is stored in myfile.bak4
                if($cycleThroughBackUps) {
                    $logger->info("cycleThroughBackUps detected (see cycleThroughBackUps) ");
                    for(my $i=1;$i<=$maxNumberOfBackUps;$i++) {
                        # remove number from backUpFile
                        my $oldBackupFile = $backupFile;
                        $oldBackupFile =~ s/$backupExtension.*/$backupExtension/;
                        my $newBackupFile = $oldBackupFile;
    
                        # add numbers back on
                        $oldBackupFile .= $i;
                        $newBackupFile .= $i-1;
    
                        # check that the oldBackupFile exists
                        if(-e $oldBackupFile){
                        $logger->info(" copying $oldBackupFile to $newBackupFile ");
                            copy($oldBackupFile,$newBackupFile) or die "Could not write to backup file $backupFile. Please check permissions. Exiting.";
                        }
                    }
                }
    
                # rest maxNumberOfBackUps
                $maxNumberOfBackUps=1 ;
                last; # break out of the loop
            } elsif(!(-e $backupFile)) {
                $maxNumberOfBackUps=1;
                last; # break out of the loop
            }
            $logger->info("$backupFile already exists, incrementing by 1... (see maxNumberOfBackUps and onlyOneBackUp)");
            $backupCounter++;
            $backupFile =~ s/$backupExtension.*/$backupExtension$backupCounter/;
        }
        $logger->info("copying $fileName to $backupFile");
    }
    
    # output these lines to the log file
    $logger->info("Backup file: $backupFile");
    $logger->info("$fileName will be overwritten after indentation");
    copy($fileName,$backupFile) or die "Could not write to backup file $backupFile. Please check permissions. Exiting.";
}
1;
