//README class constructor
class README {
  constructor(answers) {
    this.title = answers.projectTitle;
    this.description = answers.description;
    this.install = answers.installationInstructions;
    this.usage = answers.usage;
    this.contribution = answers.contribution;
    this.test = answers.test;
    this.license = answers.license;
    this.email = answers.email;
    this.github = answers.github;
    this.licenseInfo = this.renderLicenseInfo(answers.license);
  }
  create () {
      const template = 
`# ${this.title}
${this.licenseInfo[0]}
${this.licenseInfo[1]}

## Description

${this.description}
      
## Table of Contents 
      
* [Installation](#installation)
      
* [Usage](#usage)
      
* [Contributing](#contributing)
      
* [Tests](#tests)
      
* [Questions](#questions)
      
## Installation

${this.install}
      
## Usage

${this.usage}
        
## Contributing

${this.contribution}
      
## Tests
      
To run tests, run the following command:

${this.test}
      
## Questions

For questions regarding this repo contact me at ${this.email} or visit my repository at ${this.github}

## License

${this.licenseInfo[2]}`
    
      return template
  }
  licenseSectionObj = {
    apache: `Copyright [2021] [${this.title}]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`,

    bsd: `Copyright <2021> <${this.title}>

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,

    CC0: `${this.title} - <DESCRIPTION>
    Written in 2021 by <AUTHOR NAME> <${this.email}>
    [other author/contributor lines as appropriate]
    To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.
    You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.`,

    MIT: `Copyright 2021 ${this.email}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

  }
  renderLicenseInfo(license) {
    let licenseLink = ''
    let licenseBadge = ''
    let licenseSection = ''
    switch (license) {
      case "Apache2.0": 
        licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        licenseLink = "https://opensource.org/licenses/Apache-2.0";
        licenseSection = this.licenseSectionObj.apache
        return [licenseBadge, licenseLink, licenseSection];
      case "BSD 2-Clause": 
        licenseBadge = "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)";
        licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
        licenseSection = this.licenseSectionObj.bsd
        return [licenseBadge, licenseLink, licenseSection];
      case "CC0": 
        licenseBadge = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
        licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
        licenseSection = this.licenseSectionObj.CC0
        return [licenseBadge, licenseLink, licenseSection];
      case "MIT": 
        licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
        licenseLink = "https://opensource.org/licenses/MIT";
        licenseSection = this.licenseSectionObj.MIT
        return [licenseBadge, licenseLink, licenseSection];
      default: 
        licenseBadge = '';
        return [licenseBadge, licenseLink, licenseSection];
    }
  }
}

module.exports = README
