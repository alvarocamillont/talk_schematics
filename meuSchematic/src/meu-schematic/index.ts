import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function meuSchematic(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { nome } = _options;

    tree.create('hello.js', `console.log('Olá ${nome}');`);

    return tree;
  };
}
