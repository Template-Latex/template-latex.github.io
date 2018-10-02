package LatexIndent::Switches;
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
use Exporter qw/import/;
our @EXPORT_OK = qw/%switches storeSwitches $is_m_switch_active $is_t_switch_active $is_tt_switch_active/;
our %switches;
our $is_m_switch_active;
our $is_t_switch_active;
our $is_tt_switch_active;

sub storeSwitches{
    my $self = shift;

    # copy document switches into hash local to this module
	%switches = %{${$self}{switches}};
    $is_m_switch_active = defined $switches{modifyLineBreaks}?$switches{modifyLineBreaks}: 0;
    $is_t_switch_active = defined $switches{trace}?$switches{trace}: 0;
    $is_tt_switch_active = defined $switches{ttrace}?$switches{ttrace}: 0;
    $is_t_switch_active = $is_tt_switch_active ? $is_tt_switch_active : $is_t_switch_active;
    delete ${$self}{switches};
  }
1;
