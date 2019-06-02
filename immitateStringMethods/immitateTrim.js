function immitateTrim(string) {
    // note: \xA0 - Non-breakable space
   return string.replace(/^[\s\xA0]*|[\s\xA0]*$/gm, '');
}
immitateTrim('   g g g g g g g g g g    ');
