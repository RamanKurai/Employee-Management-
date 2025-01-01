const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile and analyze the sales data for the month.",
        date: "2024-12-31",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Discuss Q1 targets and strategies.",
        date: "2024-01-03",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review the recent code submissions by the dev team.",
        date: "2024-01-05",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Onboarding",
        description: "Guide the new client through the onboarding process.",
        date: "2024-12-30",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update CRM Records",
        description:
          "Ensure all client information is up to date in the CRM system.",
        date: "2024-12-29",
        category: "Administration",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug Fixing",
        description: "Fix the critical bugs reported in the app.",
        date: "2024-12-31",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Unit Testing",
        description: "Perform unit testing for the new feature implementation.",
        date: "2024-12-30",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "API Documentation",
        description: "Document the API endpoints for internal use.",
        date: "2024-12-29",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Verify the stock levels in the warehouse.",
        date: "2024-12-28",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Strategy",
        description: "Plan the social media campaigns for Q1.",
        date: "2024-12-27",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Graphic Design",
        description: "Design visuals for the new ad campaign.",
        date: "2024-12-26",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees, admin);
};
