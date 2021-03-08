export const ExtractSpecialCharacters = function (nameUPPER) {
  // BLOCO FIXO PARA TIRAR CARACTERES ESPECIAIS
  let strString = nameUPPER;
  strString = strString.replace(/ä|æ|ǽ/g, 'ae');
  strString = strString.replace(/ö|œ/g, 'oe');
  strString = strString.replace(/ü/g, 'ue');
  strString = strString.replace(/Ä/g, 'Ae');
  strString = strString.replace(/Ü/g, 'Ue');
  strString = strString.replace(/Ö/g, 'Oe');
  strString = strString.replace(
    /À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ|Α|Ά|Ả|Ạ|Ầ|Ẫ|Ẩ|Ậ|Ằ|Ắ|Ẵ|Ẳ|Ặ|А/g,
    'a'
  );
  strString = strString.replace(
    /à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª|α|ά|ả|ạ|ầ|ấ|ẫ|ẩ|ậ|ằ|ắ|ẵ|ẳ|ặ|а/g,
    'a'
  );
  strString = strString.replace(/Б/g, 'B');
  strString = strString.replace(/б/g, 'b');
  strString = strString.replace(/Ç|Ć|Ĉ|Ċ|Č/g, 'C');
  strString = strString.replace(/ç|ć|ĉ|ċ|č/g, 'c');
  strString = strString.replace(/Д/g, 'D');
  strString = strString.replace(/д/g, 'd');
  strString = strString.replace(/Ð|Ď|Đ|Δ/g, 'Dj');
  strString = strString.replace(/ð|ď|đ|δ/g, 'dj');
  strString = strString.replace(
    /È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě|Ε|Έ|Ẽ|Ẻ|Ẹ|Ề|Ế|Ễ|Ể|Ệ|Е|Э/g,
    'E'
  );
  strString = strString.replace(
    /è|é|ê|ë|ē|ĕ|ė|ę|ě|έ|ε|ẽ|ẻ|ẹ|ề|ế|ễ|ể|ệ|е|э/g,
    'e'
  );
  strString = strString.replace(/Ф/g, 'F');
  strString = strString.replace(/ф/g, 'f');
  strString = strString.replace(/Ĝ|Ğ|Ġ|Ģ|Γ|Г|Ґ/g, 'G');
  strString = strString.replace(/ĝ|ğ|ġ|ģ|γ|г|ґ/g, 'g');
  strString = strString.replace(/Ĥ|Ħ/g, 'H');
  strString = strString.replace(/ĥ|ħ/g, 'h');
  strString = strString.replace(/Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ|Η|Ή|Ί|Ι|Ϊ|Ỉ|Ị|И|Ы/g, 'I');
  strString = strString.replace(
    /ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı|η|ή|ί|ι|ϊ|ỉ|ị|и|ы|ї/g,
    'i'
  );
  strString = strString.replace(/Ĵ/g, 'J');
  strString = strString.replace(/ĵ/g, 'j');
  strString = strString.replace(/Ķ|Κ|К/g, 'K');
  strString = strString.replace(/ķ|κ|к/g, 'k');
  strString = strString.replace(/Ĺ|Ļ|Ľ|Ŀ|Ł|Λ|Л/g, 'L');
  strString = strString.replace(/ĺ|ļ|ľ|ŀ|ł|λ|л/g, 'l');
  strString = strString.replace(/М/g, 'M');
  strString = strString.replace(/м/g, 'm');
  strString = strString.replace(/Ñ|Ń|Ņ|Ň|Ν|Н/g, 'N');
  strString = strString.replace(/ñ|ń|ņ|ň|ŉ|ν|н/g, 'n');
  strString = strString.replace(
    /Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ|Ο|Ό|Ω|Ώ|Ỏ|Ọ|Ồ|Ố|Ỗ|Ổ|Ộ|Ờ|Ớ|Ỡ|Ở|Ợ|О/g,
    'O'
  );
  strString = strString.replace(
    /ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º|ο|ό|ω|ώ|ỏ|ọ|ồ|ố|ỗ|ổ|ộ|ờ|ớ|ỡ|ở|ợ|о/g,
    'o'
  );
  strString = strString.replace(/П/g, 'P');
  strString = strString.replace(/п/g, 'p');
  strString = strString.replace(/Ŕ|Ŗ|Ř|Ρ|Р/g, 'R');
  strString = strString.replace(/ŕ|ŗ|ř|ρ|р/g, 'r');
  strString = strString.replace(/Ś|Ŝ|Ş|Ș|Š|Σ|С/g, 'S');
  strString = strString.replace(/ś|ŝ|ş|ș|š|ſ|σ|ς|с/g, 's');
  strString = strString.replace(/Ț|Ţ|Ť|Ŧ|τ|Т/g, 'T');
  strString = strString.replace(/ț|ţ|ť|ŧ|т/g, 't');
  strString = strString.replace(/Þ|þ/g, 'th');
  strString = strString.replace(
    /Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ|Ũ|Ủ|Ụ|Ừ|Ứ|Ữ|Ử|Ự|У/g,
    'U'
  );
  strString = strString.replace(
    /ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ|υ|ύ|ϋ|ủ|ụ|ừ|ứ|ữ|ử|ự|у/g,
    'u'
  );
  strString = strString.replace(/Ƴ|Ɏ|Ỵ|Ẏ|Ӳ|Ӯ|Ў|Ý|Ÿ|Ŷ|Υ|Ύ|Ϋ|Ỳ|Ỹ|Ỷ|Ỵ|Й/g, 'Y');
  strString = strString.replace(/ẙ|ʏ|ƴ|ɏ|ỵ|ẏ|ӳ|ӯ|ў|ý|ÿ|ŷ|ỳ|ỹ|ỷ|ỵ|й/g, 'y');
  strString = strString.replace(/В/g, 'V');
  strString = strString.replace(/в/g, 'v');
  strString = strString.replace(/Ŵ/g, 'W');
  strString = strString.replace(/ŵ/g, 'w');
  strString = strString.replace(/Ź|Ż|Ž|Ζ|З/g, 'Z');
  strString = strString.replace(/ź|ż|ž|ζ|з/g, 'z');
  strString = strString.replace(/Æ|Ǽ/g, 'AE');
  strString = strString.replace(/ß/g, 'ss');
  strString = strString.replace(/ẞ/g, 'SS');
  strString = strString.replace(/Ĳ/g, 'IJ');
  strString = strString.replace(/ĳ/g, 'ij');
  strString = strString.replace(/Œ/g, 'OE');
  strString = strString.replace(/ƒ/g, 'f');
  strString = strString.replace(/ξ/g, 'ks');
  strString = strString.replace(/π/g, 'p');
  strString = strString.replace(/β/g, 'v');
  strString = strString.replace(/μ/g, 'm');
  strString = strString.replace(/ψ/g, 'ps');
  strString = strString.replace(/Ё/g, 'Yo');
  strString = strString.replace(/ё/g, 'yo');
  strString = strString.replace(/Є/g, 'Ye');
  strString = strString.replace(/є/g, 'ye');
  strString = strString.replace(/Ї/g, 'Yi');
  strString = strString.replace(/Ж/g, 'Zh');
  strString = strString.replace(/ж/g, 'zh');
  strString = strString.replace(/Х/g, 'Kh');
  strString = strString.replace(/х/g, 'kh');
  strString = strString.replace(/Ц/g, 'Ts');
  strString = strString.replace(/ц/g, 'ts');
  strString = strString.replace(/Ч/g, 'Ch');
  strString = strString.replace(/ч/g, 'ch');
  strString = strString.replace(/Ш/g, 'Sh');
  strString = strString.replace(/ш/g, 'sh');
  strString = strString.replace(/Щ/g, 'Shch');
  strString = strString.replace(/щ/g, 'shch');
  strString = strString.replace(/Ъ|ъ|Ь|ь/g, '');
  strString = strString.replace(/Ю/g, 'Yu');
  strString = strString.replace(/ю/g, 'yu');
  strString = strString.replace(/Я/g, 'Ya');
  strString = strString.replace(/я/g, 'ya');

  return strString;
};

export const GenerateNameSearch = async function (name) {
  let nameUPPER = name;
  let nameArray = name.split('');
  let temp = '';
  var nameSearch = [];
  // concatena todos os caracteres de frente pra trás
  // IPHONE = [I, IP, IPH, IPHO, IPHON, IPHONE ]
  for (const vall of nameArray) {
    temp = temp + vall;
    nameSearch.push(temp);
  }

  // concatena todos os caracteres de trás pra frente
  // IPHONE = [E, NE, ONE, HONE, PHONE, IPHONE ]
  temp = '';
  nameArray = nameArray.reverse();
  for (const vall of nameArray) {
    temp = vall + temp;
    nameSearch.push(temp);
  }

  // separa as palavras por espaco entre elas
  let nameArrayFor = nameUPPER.split(' ');
  // Para cada palavra:

  for (const currentNameArray of nameArrayFor) {
    var currentNameOnArray = '' + currentNameArray;
    if (currentNameOnArray !== null && currentNameOnArray.trim().length > 0) {
      // 1 - salva a palavra inteira
      currentNameOnArray = currentNameOnArray.toUpperCase();
      nameSearch.push(currentNameOnArray);

      // limpar a variavel para proxima listagem de subnameArray
      temp = '';
      // quebra essa palavra para fazer loop e indexar as subpalavras de frente pra trás
      let subnameArray = currentNameOnArray.split('');
      for (const subname of subnameArray) {
        temp = temp + subname;
        nameSearch.push(temp);
      }

      temp = '';
      // quebra essa palavra para fazer loop e indexar as subpalavras de frente pra trás
      subnameArray.reverse();
      for (const subname of subnameArray) {
        temp = subname + temp;
        nameSearch.push(temp);
      }
    }
  }

  // separa as palavras mantendo o espaco entre elas
  nameArray = nameUPPER.split('');
  // concatena todos os caracteres de frente pra trás
  // IPHONE 4G = [I, IP, IPH, IPHO, IPHON, IPHONE, IPHONE , IPHONE 4, IPHONE 4G]
  var nameArrayTemp = '';
  for (const name of nameArray) {
    nameArrayTemp = nameArrayTemp + name;
    nameSearch.push(nameArrayTemp);
  }

  // concatena todos os caracteres de trás pra frente
  // IPHONE = [E, NE, ONE, HONE, PHONE, IPHONE ]
  nameArray = nameArray.reverse();
  let nameArrayReverseTemp = '';
  for (const name of nameArray) {
    nameArrayReverseTemp = name + nameArrayReverseTemp;
    nameSearch.push(nameArrayReverseTemp);
  }

  const uniqueSet = new Set(nameSearch);

  nameSearch = [...uniqueSet];

  return nameSearch;
};
