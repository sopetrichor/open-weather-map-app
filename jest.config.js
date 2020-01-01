module.exports = {
  roots: ['<rootDir>/__tests__/'],
  moduleNameMapper: {
    '^@actions/(.*)$': '<rootDir>/src/actions/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@parsers/(.*)$': '<rootDir>/src/parsers/$1',
    '^@prop-types/(.*)$': '<rootDir>/src/prop-types/$1',
    '^@sagas/(.*)$': '<rootDir>/src/sagas/$1',
    '^@reducers/(.*)$': '<rootDir>/src/reducers/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
