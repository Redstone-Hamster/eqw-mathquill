/************************************
 * EQ Word fork — extended MathJax / AMS–oriented symbols
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 *
 * Upstream: https://github.com/mathquill/mathquill
 *
 * Stock MathQuill already covers many AMS symbols; this file registers additional
 * `LatexCmds` names that commonly appear in MathJax TeX. Expand over time (or generate
 * from your app’s symbol catalog) — each entry should map to stable HTML / entities.
 ************************************/

// Turned capital F (AMS \Finv)
LatexCmds.Finv = bindVanillaSymbol('\\Finv ', '&#8498;', 'Finv');

// Turned sans-serif capital G (AMS \Game)
LatexCmds.Game = bindVanillaSymbol('\\Game ', '&#8513;', 'Game');

// Inverted ohm sign (conductance / mho)
LatexCmds.mho = bindVanillaSymbol('\\mho ', '&#8487;', 'mho');

// Latin small letter eth
LatexCmds.eth = bindVanillaSymbol('\\eth ', '&eth;', 'eth');

// Blackboard bold small k (AMS \Bbbk) — use astral-plane code point
LatexCmds.Bbbk = () =>
  new VanillaSymbol(
    '\\Bbbk ',
    h('span', {}, [h.text('\uD835\uDD5C')]),
    'Bbbk'
  );

// Angstrom sign (U+212B)
LatexCmds.angstrom = bindVanillaSymbol('\\angstrom ', '&#8491;', 'angstrom');

// Spherical angle (distinct from \\measuredangle)
LatexCmds.sphericalangle = bindVanillaSymbol(
  '\\sphericalangle ',
  '&#8738;',
  'spherical angle'
);
