function addToList() {
    let $skill = $("input").val();
    if ($skill) {
        const $newSkill = $(`<div class="row dev-skills"><li class= "skillsList">${$skill}</li></div>`); 
        $(".ul").append($newSkill);
        $("input").val("");
    };

// okay, what I want the above to do is say if a new input is typed into the input box, so it's not equal to an empty "", then make a new variable? and add it to the unordered list as an li by appending it 

function deleteSkill() {
    $(".delete").on('click', function() {
        $(this).closest('li').remove(); 
    }); 

// event listener.... 

$("#addSkills").click(addToList);