module.exports = function check(str, bracketsConfig) {

    hope = bracketsConfig;
    var start = [];
    var end = [];

    // VVOD
    for (i = 0; i < hope.length; i++) {
        for (j = 0; j < hope.length; j++) {

            if (j%2 == 0) start.push(hope[i][j]);
            else end.push(hope[i][j]);

        }
    }


// Находим строку со скобками

function cutstring(str) {

    var first__brac_pos = undefined;
    var end__brac_pos = undefined;

    for (i = 0; i < str.length; i++) {
        for (j = 0; j < start.length; j++) {
            if (str[i] == start[j]) {
                first__brac_pos = i;
                break;
            }
        }
        if (first__brac_pos !== undefined) break;
    }

    for (i = str.length; i > 0; i--) {
        for (j = 0; j < start.length; j++) {
            if (str[i] == end[j]) {
                end__brac_pos = i;
            }
        }
        if (end__brac_pos !== undefined) break;
    }


    var newstr = str.substring(first__brac_pos + 1, end__brac_pos);

    return newstr;
}

var count_first = 0;
var count_second = 0;
var index_firts = [];
var index_second = [];
var flagnew = false;
var len = str.length;

for (i = 0; i < len; i++) {
    for (j = 0; j < start.length; j++) {
        if (str[i] == start[j]) {
            count_first++;
            index_firts.push(j);
        }
        if (str[i] == end[j]) {
            count_second++;
            index_second.push(j);

        }
    }
    if (i == (str.length-1) && count_first == count_second) {
        flagnew = true;
        str = cutstring(str);
        len = str.length;
        if (len !== 2) i = 0;
        count_first = 0;
        count_second = 0;
    }
}

var asdasd = false;

if (index_firts[0] == index_second[1]){
    asdasd = true;
}


var count = 0;
var count2 = 0

for (i=0; i < str.length; i++){
    for (j=0; j < start.length; j++){

        if (str[i] == start[j]) {
            count++;
        }
        if (str[i] == end[j]) {
            count2++;

        }
    }
}

    // var flag = true;
    // for (i = 0; i < 5; i++) {
    //     if (pos[i] > pos2[i]) {
    //         flag = false;
    //         break;
    //     }
    // }

var res = false;
var oddeven = (count + count2);

if (oddeven % 2 ==0){
    asdasd = true;
}
// if ((flag == true) && (oddeven % 2 == 0) && (count == count2)) {
//     res = true;
// }

return asdasd;

}


// // check('[(])', [['(', ')'], ['[', ']']]) // -> false
//
// // check('())(', [['(', ')']]) // -> false
//
// var onesc_start = '(';
// var onesc_end = ')';
//
// var twosc_start = '[';
// var twosc_end = ']';
//
// // var string = '((()))()';
// // var string = '())()(';
// //  var string = '[[))';
//
// // var string = '3333(3333[99(9)9999]1111)22222';
// var string = '[(])'
// var count = 0,
//     count2 = 0,
//     count3 = 0,
//     count4 = 0;
//
// var pos = [],
//     pos2 = [],
//     pos3 = [],
//     pos4 = [];
//
// for (i = 0; i < string.length; i++) {
//     if (string.charAt(i) == onesc_start) {
//         pos[count] = i;
//         count++;
//     }
//     if (string.charAt(i) == onesc_end) {
//         pos2[count2] = i;
//         count2++;
//     }
//     if (string.charAt(i) == twosc_start) {
//         pos3[count3] = i;
//         count3++;
//     }
//     if (string.charAt(i) == twosc_end) {
//         pos4[count4] = i;
//         count3++;
//     }
// }
//
// var flag = true;
// for (i = 0; i < 5; i++) {
//     if (pos[i] > pos2[i]) {
//         flag = false;
//         break;
//     }
// }
// var res = false;
// var oddeven = (count + count2);
// if ((flag == true) && (oddeven % 2 == 0) && (count == count2)) {
//     res = true;
// }
//
//
// // NEW
//
// var str = string;

// var start = ['[', '(', '{'];
// var end = [']', ')', '}'];

// Находим строку со скобками

// function cutstring(str) {
//
//     var first__brac_pos = undefined;
//     var end__brac_pos = undefined;
//
//     for (i = 0; i < str.length; i++) {
//         for (j = 0; j < start.length; j++) {
//             if (str[i] == start[j]) {
//                 first__brac_pos = i;
//                 break;
//             }
//         }
//         if (first__brac_pos !== undefined) break;
//     }
//
//     for (i = str.length; i > 0; i--) {
//         for (j = 0; j < start.length; j++) {
//             if (str[i] == end[j]) {
//                 end__brac_pos = i;
//             }
//         }
//         if (end__brac_pos !== undefined) break;
//     }
//
//
//     var newstr = str.substring(first__brac_pos + 1, end__brac_pos);
//
//     return newstr;
// }
//
// var count_first = 0;
// var count_second = 0;
// var index_firts = [];
// var index_second = [];
// var flagnew = false;
// var len = str.length;
//
// for (i = 0; i < len; i++) {
//     for (j = 0; j < start.length; j++) {
//         if (str[i] == start[j]) {
//             count_first++;
//             index_firts.push(j);
//         }
//         if (str[i] == end[j]) {
//             count_second++;
//             index_second.push(j);
//
//         }
//     }
//     if (i == (str.length-1) && count_first == count_second) {
//         flagnew = true;
//         str = cutstring(str);
//         len = str.length;
//         if (len !== 2) i = 0;
//         count_first = 0;
//         count_second = 0;
//     }
// }
//
// var asdasd = false;
//
// if (index_firts[0] == index_second[1]){
//     asdasd = true;
// }
//
// newstr = cutstring(str);
// var newstr2 = cutstring(newstr);
// var newstr3 = cutstring(newstr2);

// [[[()]]]
// [[()

// return [count, count2, pos, pos2, pos3, pos4, flag, 'result = ' + res, newstr, newstr2, newstr3, flagnew, count_first, count_second,
//     index_firts, index_second, asdasd, hope.length];


// console.log(check('', ''));