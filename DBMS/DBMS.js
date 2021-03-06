'use strict';

const fs = require('fs');
const rl = require('readline');
//const sql = require('./SQLtoJS.js');
const valid = require('./validAccess.js');
const parserCommand = require('./parser.js');

const inter = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

let hintNumber;
let language;
const dir = __dirname;
let activeUserID;
selectLanguage();

function selectLanguage(){
  inter.question('Select the language: en/ru\n', function(choiseLanguage){
  language = choiseLanguage === 'en' ? (() => {hintNumber = 1; return 0})() :
             choiseLanguage === 'ru' ? (() => {hintNumber = 1; return 1})() :
             (() => {hintNumber = 0; selectLanguage()})();
  showHint(hintNumber);
  language === undefined ? () => {} : setTimeout(onStart, 1000);
  });
};

function signInUp(){
  showHint(7)
  inter.question('', (string) => {
    if (string.split(' ')[0].toLowerCase() === reg) {
      logFree = true;
       for(let i = 0; i in hintParse[/Users].logs; ++i) {
         if (string.split(' ')[1].toLowerCase() === i) {
           showHint('err2');
           logFree = false;
         }
       }
       if (string.split(' ')[2].toLowerCase() !==
          string.split(' ')[3].toLowerCase()){
          showHint('err3');
          signInUp();
        } else {

        }
          }

           }
         }
       };
    }
*/

const hint = fs.readFileSync(dir + '/hints.json');
const hintParse = JSON.parse("" + hint);
function showHint(hintNumber){
  hintParse[0][hintNumber] === undefined ?
  () => {} : inter.write(hintParse[language][hintNumber]);
};

function onStart(){
  showHint(2);
  setTimeout(
    () => fs.access(dir + '/DataBase.json', fs.constants.F_OK, (err) => {
      !err ? (() => {
        showHint(3);
        inter.write('\x1b[36m ' + dir + '/DataBase.json\n' + '\x1b[0m');
        showHint(5);
      })() : (() => {
        //inter.write('\x1b[31m');
        showHint(4);
      })();
      readCommand();
    }), 1500);
};

function readCommand(){
  let commandID = '';
  inter.on('line', function(command){
    commandID = parserCommand.parser(command);
    showHint(commandID);
    if (commandID === 'man') {
      showHint(6)
    } //else if (commandID === 'sql') {
    //  sql
  //  }

    readCommand();
  })
};
