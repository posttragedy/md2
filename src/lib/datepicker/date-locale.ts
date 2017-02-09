import {
    Injectable,
} from '@angular/core';

/** Date locale info. TODO(mmalerba): Integrate with i18n solution once we know what we're doing. */

export class MonthLocale {
    full: string;
    short: string;
}

export class DayLocale extends MonthLocale {
    xshort: string;
}

export interface Locale {
    name: string;
    firstDayOfWeek: number;
    months: MonthLocale[];
    days: DayLocale[];
}

@Injectable()
export class DateLocale {
    locales: Locale[] = [
        {
            firstDayOfWeek: 0,
            name: 'en',
            months: [
                {full: 'January', short: 'Jan'},
                {full: 'February', short: 'Feb'},
                {full: 'March', short: 'Mar'},
                {full: 'April', short: 'Apr'},
                {full: 'May', short: 'May'},
                {full: 'June', short: 'Jun'},
                {full: 'July', short: 'Jul'},
                {full: 'August', short: 'Aug'},
                {full: 'September', short: 'Sep'},
                {full: 'October', short: 'Oct'},
                {full: 'November', short: 'Nov'},
                {full: 'December', short: 'Dec'},
            ],
            days: [
                {full: 'Sunday', short: 'Sun', xshort: 'S'},
                {full: 'Monday', short: 'Mon', xshort: 'M'},
                {full: 'Tuesday', short: 'Tue', xshort: 'T'},
                {full: 'Wednesday', short: 'Wed', xshort: 'W'},
                {full: 'Thursday', short: 'Thu', xshort: 'T'},
                {full: 'Friday', short: 'Fri', xshort: 'F'},
                {full: 'Saturday', short: 'Sat', xshort: 'S'},
            ]
        },
        {
            firstDayOfWeek: 1,
            name: 'ru',
            months: [
                {full: 'Январь', short: 'Янв.'},
                {full: 'Февраль', short: 'Фев.'},
                {full: 'Март', short: 'Мрт.'},
                {full: 'Апрель', short: 'Апр.'},
                {full: 'Май', short: 'Май'},
                {full: 'Июнь', short: 'Июн.'},
                {full: 'Июль', short: 'Июл.'},
                {full: 'Август', short: 'Авг.'},
                {full: 'Сентябрь', short: 'Сен.'},
                {full: 'Октябрь', short: 'Окт.'},
                {full: 'Ноябрь', short: 'Нбр.'},
                {full: 'Декабрь', short: 'Дек.'},
            ],
            days: [
                {full: 'Воскресенье', short: 'Вскр.', xshort: 'Вс'},
                {full: 'Понедельник', short: 'Пон.', xshort: 'Пн'},
                {full: 'Вторник', short: 'Втр.', xshort: 'Вт'},
                {full: 'Среда', short: 'Ср.', xshort: 'Ср'},
                {full: 'Четверг', short: 'Чтв.', xshort: 'Чт'},
                {full: 'Пятница', short: 'Пт.', xshort: 'Пт'},
                {full: 'Суббота', short: 'Сбт.', xshort: 'Сб'},
            ]
        }
    ]


    activeLocale: Locale;


    constructor(locale: string) {
        this.activeLocale = this.locales.find(loc=>loc.name === locale) || this.locales[0];
    }

    getDateLabel(d: number) {
        return `${d}`;
    }

    getMonthLabel(m: number, y: number) {
        return `${this.activeLocale.months[m].short.toUpperCase()} ${y}`;
    }

    getYearLabel(y: number) {
        return `${y}`;
    }
}
