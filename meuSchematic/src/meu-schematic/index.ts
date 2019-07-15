import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';

import { Parametros } from './parametros.d';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function meuSchematic(_options: Parametros): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      })
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
