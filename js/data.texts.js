var crlf = "\r\n";

var texts = [
// text0: rest
"Sehr geehrte Damen und Herren," + crlf + crlf +
"auf der Grundlage von $rechtsgrundlage$ geben Sie mir bitte schriftlich \
Auskunft über die durch Sie (auch im Weg der \
Auftragsdatenverarbeitung)" + crlf + 
"   - zu meiner Person gespeicherten Daten," + crlf + 
"   - den Zweck und die Rechtsgrundlage der Speicherung," + crlf + 
"   - die Herkunft der Daten und die empfangenden Stellen oder Kategorien \
von empfangenden Stellen, an die Daten übermittelt werden oder \
wurden." + crlf + crlf +
"Bitte teilen Sie mir ggfs. auch mit, auf welcher Rechtsgrundlage Daten \
über mich übermittelt wurden." + crlf + crlf +
"Schliesslich bitte ich um eine Eingangsbestätigung dieses Schreibens." + crlf +
"Bis zu Ihrer Antwort widerspreche ich der Löschung über mich gesammelter Daten." 
+ crlf + crlf + crlf +
"Mit freundlichen Grüßen" + crlf

// text1: Standardvorlage 2 (mit Perso)
, "Sehr geehrte Damen und Herren," + crlf + crlf +
"geben Sie mir bitte auf der Grundlage von $rechtsgrundlage$ schriftlich \
Auskunft über die durch Ihre Behörde (auch im Weg der \
Auftragsdatenverarbeitung)" + crlf + 
"   - zu meiner Person gespeicherten Daten," + crlf + 
"   - den Zweck und die Rechtsgrundlage der Speicherung," + crlf + 
"   - die Herkunft der Daten und die empfangenden Stellen oder Kategorien \
von empfangenden Stellen, an die Daten übermittelt werden oder \
wurden." + crlf + crlf +
"Bitte teilen Sie mir ggfs. auch mit, auf welcher Rechtsgrundlage Daten \
über mich übermittelt wurden." + crlf +
"Meiner Anfrage liegt ein besonderes Informationsinteresse unter \
Wahrnehmung meines verfassungsrechtlich verbürgten Grundrechts auf \
informationelle Selbstbestimmung zugrunde." + crlf + crlf +
"Schliesslich bitte ich um eine Eingangsbestätigung dieses Schreibens."
+ crlf + 
"Bis zu Ihrer Antwort widerspreche ich der Löschung über mich \
gesammelter Daten." + crlf + crlf + 
"Mit diesem Brief übersende ich Ihnen eine Personalausweiskopie. " 
+ crlf + crlf + crlf +
"Mit freundlichen Grüßen" + crlf

// text 2: Standardvorlage Sonderfall
, "Sehr geehrte Damen und Herren," + crlf + crlf +
"geben Sie mir bitte auf der Grundlage von $rechtsgrundlage$ schriftlich \
Auskunft über die durch Ihre Behörde (auch im Weg der \
Auftragsdatenverarbeitung)" + crlf + 
"   - zu meiner Person gespeicherten Daten," + crlf + 
"   - den Zweck und die Rechtsgrundlage der Speicherung," + crlf + 
"   - die Herkunft der Daten und die empfangenden Stellen oder Kategorien \
von empfangenden Stellen, an die Daten übermittelt werden oder \
wurden." + crlf + crlf +
"Bitte teilen Sie mir ggfs. auch mit, auf welcher Rechtsgrundlage Daten \
über mich übermittelt wurden." + crlf +
"Meiner Anfrage liegt ein besonderes Informationsinteresse unter \
Wahrnehmung meines verfassungsrechtlich verbürgten Grundrechts auf \
informationelle Selbstbestimmung zugrunde." + crlf + crlf +
"Schliesslich bitte ich um eine Eingangsbestätigung dieses Schreibens."
+ crlf + 
"Bis zu Ihrer Antwort widerspreche ich der Löschung über mich \
gesammelter Daten." + crlf + crlf + 
"Mit diesem Brief übersende ich Ihnen eine Personalausweiskopie. " 
+ crlf + crlf + crlf +
"Mit freundlichen Grüßen" + crlf
  
// text3: Standardvorlage HW1 (ohne Perso)
, "Sehr geehrte Damen und Herren," + crlf + crlf +
"auf der Rechtsgrundlage von $rechtsgrundlage$ bitte ich schriftlich um \
Auskunft über die durch Sie (auch im Weg der \
Auftragsdatenverarbeitung)" + crlf + 
"   - zu meiner Person gespeicherten Daten," + crlf + 
"   - den Zweck und die Rechtsgrundlage der Speicherung," + crlf + 
"   - die Herkunft der Daten und die empfangenden Stellen oder Kategorien \
von empfangenden Stellen, an die Daten übermittelt werden oder \
wurden." + crlf + crlf + 
"Sollten Sie außerdem Scorewerte erfassen, bitte ich um die Nennung meiner \
tagesaktuellen Scorewerte, sowie um nachvollziehbare und verständliche \
Information über die für dieses Scoring genutzten Daten, Datenarten, das \
Zustandekommen der Zahlenwerte und ihre Bedeutung."  + crlf + crlf + 
"Bitte teilen Sie mir ggfs. auch mit, auf welcher Rechtsgrundlage Daten \
über mich übermittelt wurden." + crlf +
"Meiner Anfrage liegt ein besonderes Informationsinteresse unter \
Wahrnehmung meines verfassungsrechtlich verbürgten Grundrechts auf \
informationelle Selbstbestimmung zugrunde." + crlf + crlf +
"Die Informationen müssen die Kriterien gemäß § 32 BDSG-neu ff. \
Art. 13 DSGVO erfüllen und so formuliert sein, dass sie für Jedermann \
verständlich sind."  + crlf + crlf +
"Schliesslich bitte ich um eine Eingangsbestätigung dieses Schreibens."
+ crlf + 
"Die Auskunft ist unentgeltlich." + crlf + crlf + 
"Ich verzichte auf die Übermittlung meiner Personalausweiskopie, da \
ich Ihre Antwort postalisch an meine ladungfähige Anschrift erwarte. \
Sollten Sie mit dieser Verfahrensweise nicht einverstanden sein, teilen \
Sie mir dies bitte mit. Sie erhalten dann eine geschwärzte Personalausweiskopie." 
+ crlf + crlf + crlf +
"Mit freundlichen Grüßen" + crlf
  
// text4: Standardvorlage HW2 (mit Perso, geschwärzt)
, "Sehr geehrte Damen und Herren," + crlf + crlf +
"auf der Rechtsgrundlage von $rechtsgrundlage$ bitte ich schriftlich um \
Auskunft über die durch Sie (auch im Weg der \
Auftragsdatenverarbeitung)" + crlf + 
"   - zu meiner Person gespeicherten Daten," + crlf + 
"   - den Zweck und die Rechtsgrundlage der Speicherung," + crlf + 
"   - die Herkunft der Daten und die empfangenden Stellen oder Kategorien \
von empfangenden Stellen, an die Daten übermittelt werden oder \
wurden." + crlf + crlf +
"Bitte teilen Sie mir ggfs. auch mit, auf welcher Rechtsgrundlage Daten \
über mich übermittelt wurden." + crlf +
"Meiner Anfrage liegt ein besonderes Informationsinteresse unter \
Wahrnehmung meines verfassungsrechtlich verbürgten Grundrechts auf \
informationelle Selbstbestimmung zugrunde." + crlf + crlf +
"Die Informationen müssen die Kriterien gemäß § 32 BDSG-neu ff. \
Art. 13 DSGVO erfüllen und so formuliert sein, dass sie für Jedermann \
verständlich sind."  + crlf + crlf +
"Schliesslich bitte ich um eine Eingangsbestätigung dieses Schreibens."
+ crlf + 
"Bis zu Ihrer Antwort widerspreche ich der Löschung über mich \
gesammelter Daten." + crlf + crlf + 
"Anbei übersende ich Ihnen eine geschwärzte Personalausweiskopie, \
sie enthält alle für Sie notwendigen Informationen zwecks Identitätsbestätigung." 
+ crlf + crlf + crlf +
"Mit freundlichen Grüßen" + crlf
];
