
import { assert } from '../../utils/index.js';
import { processCities } from '../../../src/unit-1/tasks/2-soc-opt-testable.js';

const testData = `city,population,area,density,country
  Shanghai,24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

export function test2SocOpt() {
  const result = processCities(testData);

  /* eslint-disable max-len */
  const expectedFirstRow = '  Lagos             16060303    1171   13712           Nigeria   100';
  const expectedLastRow = '  Istanbul          14160467    5461    2593            Turkey    19';
  /* eslint-enable max-len */

  assert({
    testName: 'Test First Row',
    actual: result[0],
    expected: expectedFirstRow,
  });

  assert({
    testName: 'Test Row Count',
    actual: result.length,
    expected: 9,
  });

  assert({
    testName: 'Test Last Row',
    actual: result[8],
    expected: expectedLastRow,
  });
}
