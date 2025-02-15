import {module, test} from 'qunit';
import {click, visit} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | adapter', function (hooks) {
  setupApplicationTest(hooks);

  test('power-calendar', async function (assert) {
    await visit('/');

    await click('#power-calendar .ember-power-calendar-day--interactive.ember-power-calendar-day--current-month');
    assert.dom("#power-calendar .ember-power-calendar-day--selected").exists("selected day");
  });

  test('power-calendar-range', async function (assert) {
    await visit('/');

    // use nth to select different weeks
    await click('#power-calendar-range .ember-power-calendar-week:nth-child(2) .ember-power-calendar-day--interactive.ember-power-calendar-day--current-month');
    assert.dom("#power-calendar-range .ember-power-calendar-day--selected").exists("selected day");
    await click('#power-calendar-range .ember-power-calendar-week:nth-child(3) .ember-power-calendar-day--interactive.ember-power-calendar-day--current-month');

    assert.dom('#power-calendar-range .ember-power-calendar-day--range-start').exists();
    assert.dom('#power-calendar-range .ember-power-calendar-day--range-end').exists();
  });

  test('power-calendar', async function (assert) {
    await visit('/');

    await click('#power-calendar-multiple .ember-power-calendar-week:nth-child(2) .ember-power-calendar-day--interactive.ember-power-calendar-day--current-month');
    await click('#power-calendar-multiple .ember-power-calendar-week:nth-child(3) .ember-power-calendar-day--interactive.ember-power-calendar-day--current-month');
    await click('#power-calendar-multiple .ember-power-calendar-week:nth-child(4) .ember-power-calendar-day--interactive.ember-power-calendar-day--current-month');

    assert.dom("#power-calendar-multiple .ember-power-calendar-day--selected").exists({count: 3});
  });
});
