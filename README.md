@makepanic/ember-power-calendar-date-fns
==============================================================================

[![Build Status](https://travis-ci.org/makepanic/ember-power-calendar-date-fns.svg?branch=master)](https://travis-ci.org/makepanic/ember-power-calendar-date-fns)
[![npm version](https://badge.fury.io/js/%40makepanic%2Fember-power-calendar-date-fns.svg)](https://badge.fury.io/js/%40makepanic%2Fember-power-calendar-date-fns)

Date manipulation, formatting and parsin is too complex for ember-power-calendar to reinvent, so it
has to rely on other well tested libraries for that.

This is the addon that exposes the utils used internally by [ember-power-calendar](https://www.ember-power-calendar.com),
using [date-fns](https://date-fns.org/) underneath.

You will want to install this addon if you already use date-fns in your application already, or if
you don't want to use moment.js or [Luxon](https://moment.github.io/luxon/).


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install @makepanic/ember-power-calendar-date-fns
```


Usage
------------------------------------------------------------------------------

**Don't use it.**

This library is meant to be used internally by `ember-power-calendar` only.

The API can change in breaking ways based on the needs of Ember Power Calendar.

## I18n

Because date-fns has no support for various i18n features, like `startOfWeek`, `weekdaysShort`, you have to implement these yourself.
By default, this adapter implements any localization feature as a fallback, using the `en` locale.

You can implement your own DaysComponent by extending the default one.
Simply overwrite methods that return i18n dependent data.

```ts
import DaysComponent from 'ember-power-calendar/components/power-calendar/days';
import layout from 'ember-power-calendar/templates/components/power-calendar/days';

export default class PowerCalendarDays extends DaysComponent {
  layout = layout;

  @service intl!: IntlService;

  @computed('calendar.locale')
  get weekdaysShort(): string[] {
    const { intl } = this;
    const prefix = 'calendar.days.short';

    return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
      .map(k => intl.t(`${prefix}.${k}`));
  }

  @alias('weekdaysShort') weekdaysMin!: string[];

  @computed('calendar.locale')
  get weekdays(): string[] {
    const { intl } = this;
    const prefix = 'calendar.days.long';

    return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
      .map(k => intl.t(`${prefix}.${k}`));
  }
}
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
