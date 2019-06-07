
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1, 
          description: 'Describe action 1',
          notes: 'Notes for action 1',
          completed: false
        },
        {
          project_id: 1, 
          description: 'Describe action 2',
          notes: 'Notes for action 2',
          completed: false
        },
        {
          project_id: 1, 
          description: 'Describe action 3',
          notes: 'Notes for action 3',
          completed: false
        },
        
      ]);
    });
};
