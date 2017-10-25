#!/usr/bin/perl

use strict;

my $component_path = $ARGV[0];

if ($#ARGV != 0) { usage() }
sub usage {
	print "Usage:\n\t./components_init.pl <path_to_components_folder>\n";
	print "\t\tand paste tree to STDIN, or:\n";
	print "\tcat components.lst | ./components_init.pl ";
	print "<path_to_components_folder>\n\n";
	print "Input format:\n<CompName> {Depend1 Depend2 ...}\n";
	print "\tWhere CompName is name of component and DependN is its ";
	print "Dependence\n";
	exit(1);
}

while(<>) {
	my @component = split(' ');
	my $deps = $#component;
	my $name = $component[0];

	open(F, ">$component_path$name.jsx");

	print F "import React, { Component } from 'react'\n";
	for(my $d = 0; $d < $deps; $d++) {
		my $c = $component[$d+1];
		print F "import { $c } from './$c.jsx'\n";
	}
	print F "\n";
	print F "class $name extends Component {\n  render() {\n    return (\n";
	print F "      <div>$name</div>\n    )\n  }\n}\n\nexport { $name }";

	close(F);
}
