/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Tree, VirtualTree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '../utility/schematic-test-runner';
import { Schema as DirectiveSchema } from './schema';


describe('Directive Schematic', () => {
  const schematicRunner = new SchematicTestRunner('@schematics/angular');
  const defaultOptions: DirectiveSchema = {
    name: 'foo',
    path: 'app',
    sourceDir: 'src',
    spec: true,
    module: undefined,
    export: false,
    prefix: undefined,
    flat: true,
  };

  let appTree: Tree;

  beforeEach(() => {
    appTree = new VirtualTree();
    appTree = SchematicTestRunner.createAppNgModule(appTree);
  });

  it('should create a directive', () => {
    const options = { ...defaultOptions };

    const tree = schematicRunner.runSchematic('directive', options, appTree);
    const files = tree.files;
    expect(files.indexOf('/src/app/foo.directive.spec.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/src/app/foo.directive.ts')).toBeGreaterThanOrEqual(0);
  });


});