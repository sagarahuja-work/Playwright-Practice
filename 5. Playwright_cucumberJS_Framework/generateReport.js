import report from 'multiple-cucumber-html-reporter';

report.generate({
  jsonDir: './', // Path to your cucumber.json file
  reportPath: './cucumber-report', // Path to generate the HTML report
  customData: {
    title: 'Execution Info',
    data: [
      { label: 'Project', value: 'Playwright-Cucumber JS Framework' },
      { label: 'Release', value: '1.0' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
      { label: 'Execution End Time', value: new Date().toLocaleString() },
    ],
  },
});
