module.exports = {
  name: 'snippeter',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/snippeter',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
