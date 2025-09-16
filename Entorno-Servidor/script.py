#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Programa que conta o número de palabras dun ficheiro.

__author__ = "Paco Salgado"


name = input('Enter file:')
handle = open(name, 'r')
counts = dict()

for line in handle:
	words = line.split()
	for word in words:
		counts[word] = counts.get(word, 0) + 1

bigcount = None
bigword = None

for word, count in list(counts.items()):
	if bigcount is None or count > bigcount:
		bigword = word
		bigcount = count

print(bigword, bigcount)