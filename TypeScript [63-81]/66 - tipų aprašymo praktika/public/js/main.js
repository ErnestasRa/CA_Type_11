"use strict";
console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
    const toUpperCase = (str) => str.toUpperCase();
    const arg1 = 'labas';
    const arg2 = 'visogero';
    const arg3 = 'man patinka bananai';
    console.table({
        [`toUpperCase(${arg1})`]: toUpperCase(arg1),
        [`toUpperCase(${arg2})`]: toUpperCase(arg2),
        [`toUpperCase(${arg3})`]: toUpperCase(arg3),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
    const symbolCount = (str1, str2) => str1.length + str2.length;
    const args1 = ['labas', 'vakaras'];
    const args2 = ['viso', 'gero'];
    const args3 = ['laba', 'diena'];
    console.table({
        [`symbolCount(${JSON.stringify(args1)})`]: symbolCount(...args1),
        [`symbolCount(${JSON.stringify(args2)})`]: symbolCount(...args2),
        [`symbolCount(${JSON.stringify(args3)})`]: symbolCount(...args3),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
    const includesLetter = (str, letter) => str.includes(letter);
    const args1 = ['labas', 'l'];
    const args2 = ['labas', 'z'];
    const args3 = ['kepenys', 'e'];
    console.table({
        [`includesLetter(${JSON.stringify(args1)})`]: includesLetter(...args1),
        [`includesLetter(${JSON.stringify(args2)})`]: includesLetter(...args2),
        [`includesLetter(${JSON.stringify(args3)})`]: includesLetter(...args3),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
    const equalSymbolCount = (str) => str.length % 2 === 0;
    const arg1 = 'labas';
    const arg2 = 'visogero';
    const arg3 = 'man patinka bananai';
    console.table({
        [`equalSymbolCount(${arg1})`]: equalSymbolCount(arg1),
        [`equalSymbolCount(${arg2})`]: equalSymbolCount(arg2),
        [`equalSymbolCount(${arg3})`]: equalSymbolCount(arg3),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
    const VOWEL_REGEX = /[aeiyouAEIOUYąęėįųūĄĘĖĮŲŪ]/g;
    const countVowels = (str) => {
        let count = 0;
        for (let i = 0; i < str.length; i += 1) {
            if (VOWEL_REGEX.test(str[i])) {
                count += 1;
            }
        }
        return count;
    };
    const arg1 = 'labas';
    const arg2 = 'visogero';
    const arg3 = 'man patinka bananai';
    console.table({
        [`countVowels(${arg1})`]: countVowels(arg1),
        [`countVowels(${arg2})`]: countVowels(arg2),
        [`countVowels(${arg3})`]: countVowels(arg3),
        empty: undefined,
    });
}
console.groupEnd();
console.group('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
    const recurrenceCount = (str, letter) => {
        let count = 0;
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === letter) {
                count += 1;
            }
        }
        return count;
    };
    const args1 = ['labas', 'a'];
    const args2 = ['labas', 'b'];
    const args3 = ['labas', 'p'];
    console.table({
        [`recurrenceCount(${JSON.stringify(args1)})`]: recurrenceCount(...args1),
        [`recurrenceCount(${JSON.stringify(args2)})`]: recurrenceCount(...args2),
        [`recurrenceCount(${JSON.stringify(args3)})`]: recurrenceCount(...args3),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
}
console.groupEnd();
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map