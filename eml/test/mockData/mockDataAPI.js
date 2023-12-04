

export function mockDataAPI () {
	return {

		userData: {
			_id: '651a78592cf67cb9e721aea1',
			name: 'test test',
			email: 'test@mail.dk',
			subscriptions: ['651d596a26cd9875d86a12b7'],
		},
		courseData: {
			title: 'Course math',
			_id: '651d3a15cda7d5bd2878dfc7',
			sections: ['651d40e3cdcba354b1b9490d', '651d599626cd9875d86a12bc'],
			description: 'Test',
			category: 'Finanças pessoais',
			estimatedHours: 10,
			dateUpdated: '2023-10-04T10:10:29.897Z',
			dateCreated: '2023-10-04T10:10:29.897Z',
			difficulty: 1,
			published: true,
			status: 'published',
			rating: 0,
			numOfSubscriptions: 0,
			__v: 6,
		},
		sectionData: [
			{
				title: 'test section',
				_id: '651d40e3cdcba354b1b9490d',
				parentCourse: '651d3a15cda7d5bd2878dfc7',
				description: 'this is a test section',
				components: [],
				sectionNumber: 1,
				totalPoints: 100,
				dateUpdated: '2023-10-04T10:10:29.897Z',
				dateCreated: '2023-10-04T10:10:29.897Z',
				__v: 1,
			},
			{
				title: 'test section 2',
				_id: '651d599626cd9875d86a12bc',
				parentCourse: '651d3a15cda7d5bd2878dfc7',
				description: 'this is a test section 2',
				components: [],
				sectionNumber: 2,
				totalPoints: 200,
				dateUpdated: '2023-10-04T10:10:29.897Z',
				dateCreated: '2023-10-04T10:10:29.897Z',
				__v: 1,
			},
		],
		allCoursesData: [
			{
				title: 'Course math',
				_id: '651d3a15cda7d5bd2878dfc7',
				sections: ['651d40e3cdcba354b1b9490d'],
				description: 'Test',
				category: 'Finanças pessoais',
				estimatedHours: 10,
				dateUpdated: '2023-10-04T10:10:29.897Z',
				dateCreated: '2023-10-04T10:10:29.897Z',
				difficulty: 1,
				published: true,
				status: 'published',
				rating: 0,
				numOfSubscriptions: 0,
				__v: 6,
			},
			{
				title: 'Just a test course',
				_id: '651d596a26cd9875d86a12b7',
				sections: ['651d599626cd9875d86a12bc', '651d59a126cd9875d86a12c0'],
				description: 'Test description',
				category: 'Costura',
				estimatedHours: 20,
				dateUpdated: '2023-10-04T12:24:10.740Z',
				dateCreated: '2023-10-04T12:24:10.740Z',
				difficulty: 3,
				published: true,
				status: 'published',
				rating: 3,
				numOfSubscriptions: 0,
				__v: 2,
			},
		],
		subscribedCourses: [
			{
				title: 'Just a test course',
				_id: '651d596a26cd9875d86a12b7',
				sections: ['651d599626cd9875d86a12bc', '651d59a126cd9875d86a12c0'],
				description: 'Test description',
				category: 'Costura',
				estimatedHours: 20,
				dateUpdated: '2023-10-04T12:24:10.740Z',
				dateCreated: '2023-10-04T12:24:10.740Z',
				difficulty: 3,
				published: true,
				status: 'published',
				rating: 3,
				numOfSubscriptions: 0,
				__v: 2,
			},
		],
		errorResponse: new Error('Error message'),
	};
}

