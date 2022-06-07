// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//'Apache', 'BSD', 'Attribution','GNU','IBM','MIT','Mozilla','Perl'
function renderLicenseBadge(badge) {
  var result;
  switch(badge) {
    case 'Apache':
      result = 'https://opensource.org/licenses/Apache-2.0'
    break;
    case 'BSD':
      result = 'https://opensource.org/licenses/BSD-3-Clause'
    break;
    case 'Attribution':
      result = 'https://creativecommons.org/licenses/by/4.0/'
    break;
    case 'GNU':
      result = 'https://www.gnu.org/licenses/gpl-3.0'
    break;
    case 'IBM':
      result = 'https://opensource.org/licenses/IPL-1.0'
    break;
    case 'MIT':
      result = 'https://opensource.org/licenses/MIT'
    break;
    case 'Mozilla':
      result = 'https://opensource.org/licenses/MPL-2.0'
    break;
    case 'Perl':
      result = 'https://opensource.org/licenses/Artistic-2.0'
    break;  
  }
  if (result!=undefined){return result}else{return 'none'} ;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(link) {
  var result;
  switch(link) {
    case 'Apache':
      result = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
    case 'BSD':
      result = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
    case 'Attribution':
      result = '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)]'
    break;
    case 'GNU':
      result = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]'
    break;
    case 'IBM':
      result = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]'
    break;
    case 'MIT':
      result = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    break;
    case 'Mozilla':
      result = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
    break;
    case 'Perl':
      result = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
    break;  
  }
  if (result!=undefined){return result}else{return 'none'} ;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function Markdown(data) {
  var license = data.license;
  var licenseInf=[];
  licenseInf[0] = renderLicenseBadge(license);
  licenseInf[1] = renderLicenseLink(license);
  // licenseInf[2] = renderLicenseSection(license);
  // return `# ${data.title}`;
  return licenseInf;
}

module.exports = {
  Markdown
}
