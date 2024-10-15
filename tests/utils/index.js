const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  white: '\x1b[37m',
  yellow: '\x1b[33m',
};

export function assert({ testName, actual, expected }) {
  if (actual === expected) {
    console.log(COLORS.green, `${testName}: PASS`, COLORS.reset);
  } else {
    console.log(
      COLORS.red, `${testName}: FAIL\n\r`,
      COLORS.green, `Expected: "${expected}"\n\r`,
      COLORS.yellow, `  Actual: "${actual}"`,
      COLORS.reset,
    );
  }
}
