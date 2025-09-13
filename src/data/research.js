// Research / Client Project data module
// Contains academic or client project style entries separated from professional work history.

const research = {
  id: 'research-projects',
  title: 'Research & Client Projects',
  items: [
    {
      role: 'Team Leader',
      company: 'Cheddar Inc (MPS Client Project)',
      period: '2020',
      location: 'Ithaca, NY',
      bullets: [
        'Led a student-client research project contextualizing stock market movements with social media sentiment',
        'Developed Python pipelines to gather several million Reddit posts for analysis',
        'Collaborated with Cheddar engineers to provision an AWS Kubernetes cluster for team data access',
        'Designed processes to train sentiment and spam/misinformation classifiers via manual data labeling',
        'Built a system to regularly score new data and aggregate metrics for statistical testing and visualization'
      ]
    },
    {
      role: 'Analyst',
      company: 'Navy Federal Credit Union (MPS Client Project)',
      period: '2020',
      location: 'Ithaca, NY',
      bullets: [
        'Analyzed large-scale social media feedback dataset to extract actionable insights',
        'Applied preprocessing, sentiment analysis, and topic modeling to identify emerging themes',
        'Produced visualizations demonstrating monitoring methodology for company-specific trends over time'
      ]
    }
  ]
};

export default research;
