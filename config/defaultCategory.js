const mongoose = require('mongoose');
const { Category, CategorySchema } = require('../models/userCategoryModel');

// Define default categories
const defaultCategorie = [
  {
    _id: "576beaf0ed777ab0145122d1", name: 'SUPERADMIN', permissions: [
      "super_admin_dashboard",
      "employee_portal_dashboard",
      "employee_leave",
      "admin_dashboard",
      "change_password_page",
      "role_permission",
      "change_category_page",
      "organization_dashboard",
      "organization_details",
      "organization_documents",
      "organization_configuration_view",
      "organization_configuration_edit",
      "organization_pyramid_view",
      "organization_pyrami_edit",
      "employee_hierarchy",
      "employee_details_dashboard",
      "employee_master_view",
      "employee_master_edit",
      "department_view",
      "department_edit",
      "shift_view",
      "shift_edit",
      "pre_resignation_view",
      "pre_resignation_edit",
      "resignation_view",
      "resignation_edit",
      "attendance_dashboard",
      "attendance_calendar_update",
      "leave_dashboard",
      "leave_types_view",
      "leave_types_edit",
      "leave_register_view",
      "leave_register_approve",
      "holiday_list_view",
      "holiday_list_edit",
      "site_view",
      "site_edit",
      "site_add",
      "templates_view",
      "templates_create",
      "recruitment_dashboard",
      "jobs_view",
      "jobs_edit",
      "job_template_view",
      "job_template_edit",
      "candidate_list_view",
      "candidate_list_edit",
      "interview_scheduler_view",
      "interview_scheduler_edit",
      "shortlisted_candidates_view",
      "shortlisted_candidates_edit"
    ]
  },
  {
    _id: "576beaf0ed777ab0145122d2", name: 'ADMIN', permissions: [
      "employee_portal_dashboard",
      "employee_leave",
      "admin_dashboard",
      "change_password_page",
      "role_permission",
      "change_category_page",
      "organization_dashboard",
      "organization_details",
      "organization_documents",
      "organization_configuration_view",
      "organization_configuration_edit",
      "organization_pyramid_view",
      "organization_pyrami_edit",
      "employee_hierarchy",
      "employee_details_dashboard",
      "employee_master_view",
      "employee_master_edit",
      "department_view",
      "department_edit",
      "shift_view",
      "shift_edit",
      "pre_resignation_view",
      "pre_resignation_edit",
      "resignation_view",
      "resignation_edit",
      "attendance_dashboard",
      "attendance_calendar_update",
      "leave_dashboard",
      "leave_types_view",
      "leave_types_edit",
      "leave_register_view",
      "leave_register_approve",
      "holiday_list_view",
      "holiday_list_edit",
      "site_view",
      "site_edit",
      "site_add",
      "templates_view",
      "templates_create",
      "recruitment_dashboard",
      "jobs_view",
      "jobs_edit",
      "job_template_view",
      "job_template_edit",
      "candidate_list_view",
      "candidate_list_edit",
      "interview_scheduler_view",
      "interview_scheduler_edit",
      "shortlisted_candidates_view",
      "shortlisted_candidates_edit"
    ]
  },
];
// Function to check and initialize categories if empty
async function mainSystemUserCategories() {
  try {
    const categories = await Category.find({});
    if (categories.length === 0) {
      console.log('No categories found, initializing default categories...');
      await Category.insertMany(defaultCategorie);
      console.log('Default categories created successfully.');
    } 
    else {
      console.log('Categories already exist, skipping initialization.');
    }
}
catch(error) {
    console.error('Error initializing categories:', error);
  } 
}

module.exports = {
  mainSystemUserCategories
};