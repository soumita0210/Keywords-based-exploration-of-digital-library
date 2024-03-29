/********************DataBase Constants**************************/

const studentTable = {
	name: 'STUDENT',
	primaryKeyPrefix: "STU_PK_",
	columns : {
		id: "student_id",
		name: "student_name",
		email: "registered_email",
		mentorEmail: "mentor_email",
		registerDate: "register_date",
		renewalDate: "renewal_date",
		dob: "dob",
		gender: "gender",
		subscribed: "is_subscribed",
		is_and: "is_and",
		phone: "phone",
		guide_name: "guide_name",
		faculty_name: "research_faculty"
	}
};

const adminTable = {
	name: "ADMIN",
	primaryKeyPrefix: "ADM_PK_",
	columns: {
		id: "admin_id",
		email: "admin_email",
		name: "admin_name",
		digest: "hashdigest",
		superadmin: "is_superadmin"
	}
};

const keywordTable = {
	name: "KEYWORD",
	primaryKeyPrefix: "KEY_WRD_",
	columns: {
		id: "keyword_id",
		name: "keyword_name"
	}
};

const emailDetails = {
	id : "ars.150697@gmail.com",
	password : "Akash@1997"
};

const keywordStudentRequest = {
	name: "KEYWORD_STUDENT_REQUEST",
	columns: {
		keywordId: "keyword_id",
		studentId: "student_id"
	}
};

const keywordStudentStats = {
	name: "KEYWORD_STUDENT_STATS",
	columns: {
		keywordId: "keyword_id",
		studentId: "student_id"
	}
};

const userStats = {
	name: "USER_STATS",
	columns: {
		date: "datevalue",
		active: "active_users",
		subscribed: "subscribed_users"
	}
};

const filePath = {
	pythonCode : "/Users/akashrs/ResearchHunt/WebApp/lib/business_logic/python-module/logic.py",
	documentsDir : "/Users/akashrs/ResearchHunt/WebApp/documents/"
};

const databaseConstants = {
	databaseName : "SIH",
	userName: "akash",
	hostIP: "localhost",
	password: "Akash@15",
	port: 33060,
	tables : {
		student : studentTable,
		admin : adminTable,
		keyword: keywordTable,
		keywordStudentRequest: keywordStudentRequest,
		keywordStudentStats: keywordStudentStats,
		userStats: userStats
	}
};



module.exports = {
	database : databaseConstants,
	filePath: filePath,
	secret: "ndskjvbekbasjkcbaks",
	email: emailDetails, 
	saltRounds : 10
};