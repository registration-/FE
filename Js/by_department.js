/**
 *
 * Created by jl on 12/21/14.
 */
$(document).ready(function () {
    console.log('df');
    $.getJSON('http://api.registration.com/api/departments', function (categories) {
        console.log(categories);
        var categoriesList = $('#categories-list'),
            departmentsList = $('#departments-list'),
            departments;
        for(var key in categories){
            categoriesList.append($('<li>' + key + '</li>'));
            departments = categories[key];

            var departmentPanel = $('<div>').addClass('department-panel');
            departments.forEach(function (department) {
                departmentPanel.append($('<a href="http://registration.com/hospital_list.html?department=' + department.name + '">' + department.name + '</a>'));
            });
            departmentsList.append(departmentPanel);
        }
        var activeCategory;
        categoriesList.on('mouseover','li',function(event){
            if(activeCategory){
               activeCategory.removeClass('active');
                departmentsList.children('.department-panel').eq(activeCategory.index()).removeClass('active');
            }
            activeCategory = $(this);
            activeCategory.addClass('active');
            departmentsList.children('.department-panel').eq(activeCategory.index()).addClass('active');
        });
        departmentsList.children('.department-panel').eq(0).addClass('active');
        categoriesList.children('li').eq(0).addClass('active');
    });
});
