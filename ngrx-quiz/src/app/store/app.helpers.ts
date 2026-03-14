import { Dictionaries, Dictionary } from "../data/dictionaries";

export function getDictionary(language: string, dictionaries: Dictionaries): Dictionary {
   const lowerCaseDict: Dictionary = {};
   Object.entries(dictionaries[language])
      .map(([key, value]) => {
         lowerCaseDict[key.toLowerCase()] = value;
      });
   return lowerCaseDict;
}

export function translate(key: string, dictionary: Dictionary): string {
   key = key.trim().toLowerCase();
   return dictionary[key] ?? key;
}

export function translateToPair(key: string, dictionary: Dictionary): { key: string, name: string } {
   key = key.trim().toLowerCase();
   return { key, name: translate(key, dictionary) };
}

export function translateToPairs(keys: string[], dictionary: Dictionary): { key: string, name: string }[] {
   return keys.map(key => translateToPair(key, dictionary));
}