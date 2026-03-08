export const mockStudents = [
    {
        id: '1',
        name: 'Sindhu GVK',
        email: 'jane@example.com', // Keeping same email for easy login demo
        role: 'student',
        education: 'B.Tech Computer Science and Engineering',
        university: 'Vignan University',
        cgpa: '9.8',
        gradYear: '2027',
        professionalGoal: 'Aspiring Full Stack Developer & Open Source Enthusiast',
        skills: ['JavaScript', 'React.js', 'Firebase', 'Python', 'Tailwind CSS', 'Git & GitHub', 'Linux'],
        projects: [
            {
                name: 'Green Cart App',
                description: 'A comprehensive e-commerce solution for sustainable products.',
                link: 'https://github.com/GVK-Sindhu/Green-Cart'
            },
            {
                name: 'Notice Hub',
                description: 'Centralized notification system for academic updates.',
                link: 'https://github.com/GVK-Sindhu/Notice-Hub'
            }
        ],
        experience: [
            {
                role: 'Software Engineering Intern',
                company: 'Tech Solutions Inc.',
                duration: 'June 2025 - Aug 2025',
                description: 'Developed responsive UI components using React and optimized API fetching.'
            },
            {
                role: 'Technical Lead',
                company: 'Google Developer Student Club',
                duration: '2024 - Present',
                description: 'Leading workshops on web development and mentoring junior developers.'
            }
        ],
        certificates: [
            { name: 'Red Hat Certified System Administrator (RHCSA)', issuer: 'Red Hat' },
            { name: 'Oracle Certified Associate, Java SE 8 Programmer', issuer: 'Oracle' },
            { name: 'Meta Front-End Developer Professional Certificate', issuer: 'Coursera' }
        ],
        progress: {
            'Web Development': 95,
            'DSA': 82,
            'System Design': 75
        },
        github: 'https://github.com/GVK-Sindhu',
        portfolio: 'https://sindhugvk.dev',
        codolioUrl: 'https://codolio.com/profile/GVKSindhu',
        codingProfiles: [
            { platform: 'LeetCode', link: 'https://leetcode.com/GVK_Sindhu', icon: 'code' },
            { platform: 'HackerRank', link: 'https://hackerrank.com/GVK_Sindhu', icon: 'award' },
            { platform: 'Codeforces', link: 'https://codeforces.com/profile/Sindhu', icon: 'bar-chart' }
        ]
    },
    {
        id: '2',
        name: 'John Smith',
        role: 'student',
        email: 'john@example.com',
        skills: ['Python', 'DSA', 'Machine Learning', 'C++'],
        projects: [{ name: 'Sentiment Analysis', link: '#' }],
        certificates: [{ name: 'Coursera ML Specialization', issuer: 'Coursera' }],
        progress: {
            'AI / ML': 75,
            'DSA': 90
        },
        github: 'https://github.com/johnsmith',
        portfolio: 'https://johnsmith.dev'
    }
];

export const mockOpportunities = [
    {
        id: '1',
        title: 'Frontend Developer Intern',
        company: 'TechCorp',
        description: 'Looking for a React enthusiast to join our team.',
        deadline: '2026-04-15',
        type: 'Internship'
    },
    {
        id: '2',
        title: 'Graduate SDE Role',
        company: 'BigSoft',
        description: 'Entry-level software engineering position.',
        deadline: '2026-05-01',
        type: 'Job'
    },
    {
        id: '3',
        title: 'Winter Hackathon 2026',
        company: 'GlobalOpen',
        description: 'Solve real-world problems with code!',
        deadline: '2026-12-10',
        type: 'Competition'
    }
];

export const mockDoubts = [
    {
        id: '1',
        studentName: 'Sindhu GVK',
        question: 'How do I optimize a recursive function in Python?',
        status: 'open',
        createdAt: '2026-03-07T10:00:00Z'
    },
    {
        id: '2',
        studentName: 'John Smith',
        question: 'Difference between useMemo and useCallback?',
        status: 'answered',
        createdAt: '2026-03-06T15:30:00Z'
    }
];

export const mockFacultyRewards = [
    {
        id: '1',
        courseName: 'Advanced React Patterns',
        platform: 'Coursera',
        rating: 4.8,
        enrollLink: '#'
    },
    {
        id: '2',
        courseName: 'Deep Learning Specialization',
        platform: 'edX',
        rating: 4.9,
        enrollLink: '#'
    }
];
