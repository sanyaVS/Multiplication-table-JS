document.write("<table border='1' >");
for (j = 1; j < 11; j++) {
   for (i = 1; i < 11; i++) {
      if (j == 1) {
         if (i < 11) {
            document.write("<td bgcolor='white'>" + i * j + "</td>");
         }
      }
      else if (j > 1 || j < 11) {
         if (i == 1) {
            document.write("<td bgcolor='white'>" + i * j + "</td>");
         }
         else if (j % 2 != 0) {
            if (i % 2 == 0) {
               document.write("<td bgcolor='yellow'>" + i * j + "</td>");
            }
            else if (i % 2 != 0) {
               document.write("<td bgcolor='red'>" + i * j + "</td>");
            }
         }
         else if (j % 2 == 0) {
            if (i % 2 == 0) {
               document.write("<td bgcolor='red'>" + i * j + "</td>");
            }
            else if (i % 2 != 0) {
               document.write("<td bgcolor='yellow'>" + i * j + "</td>");
            }
         }
      }
   }
   document.write("</tr>");
}
document.write("</table>");