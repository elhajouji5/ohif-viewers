import React from 'react';
import { id } from './id';
import getPanelModule from './getPanelModule';

/**
 * You can remove any of the following modules if you don't need them.
 */
const findingsExtension = {
  /**
   * Only required property. Should be a unique value across all extensions.
   * You ID can be anything you want, but it should be unique.
   */
  id,
  getPanelModule,
};

export default findingsExtension;
