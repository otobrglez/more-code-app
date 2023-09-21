import './style.css'
import {rawToCode, morseTable, MorseSeq} from './morse'

declare global {
  interface Window {
    morseOutput: MorseSeq | undefined
  }
}

const cleanInput = (raw: string): string => (raw || "").trim()

const bindMorseInputChanges = (inputEvent: any) => {
  if(inputEvent.preventDefault) inputEvent.preventDefault();
  const event = inputEvent || window.event;
  const raw = cleanInput(event.target.value);
  window!.morseOutput = rawToCode(morseTable, raw);
  renderMorseOutput();
}

const renderMorseOutput = () => {
  const renderCode = (code: string | undefined): string =>
    code ? `<div class="code">${code}</div>`
    : `<div class="code">&nbsp;</div>`

  const outputHTML: string | undefined = window.morseOutput?.map (pair => {
    const [char, code] = [pair?.[0] || '', pair?.[1]];
    return `<div class="combo"><div class="char">${char}</div>${renderCode(code)}</div>`
  }).join("");
  document.getElementById("morseOutput")!.innerHTML = outputHTML || "";
}

window.onload = function() {
  window!.morseOutput = rawToCode(morseTable, "Hello world!");
  renderMorseOutput();

  document.getElementById("morseInput")!.onkeyup = bindMorseInputChanges;
}
