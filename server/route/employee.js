
const express = require('express');
 
const router = express.Router();


router.get('/', (req, res) => {
    
   EmployeeSchema.find()
          .then( allEmployee => res.status(200).json(allEmployee))
          .catch (error => res.status(404).json( { message: error.message }));

});

router.post('/add', (req, res) => {
   const emp = req.body;
  
   const newEmp = new EmployeeSchema({
      
        ...emp  
   });
   
   newEmp.save()
       .then(() => res.status(201).json(newEmp))
       .catch (error => res.status(409).json( { message: error.message }));
 
} );

router.get('/view/:id', (req, res) => {
   EmployeeSchema.findById(req.params.id)
      .then(emp => res.json(emp))
      .catch(error => res.status(400).json( { message: error.message }));
});

router.delete('/delete/:id', (req, res) => {
   EmployeeSchema.findByIdAndDelete(req.params.id)
      .then( () => res.json(`Employee with id: ${ req.params.id } is deleted `))
      .catch(error => res.status(400).json( { message: error.message }));
});

router.patch('/update/:id', (req, res) => {
   EmployeeSchema.findById(req.params.id)
      .then(emp => {
         emp.name = req.body.name;
         emp.salary = req.body.salary;
         emp.address = req.body.address;
         emp.team = req.body.team;
         emp.gender = req.body.gender;

         emp.save()
            .then(() => res.json(`Employee with id: ${ req.params.id } has been updated`))
            .catch(error => res.status(400).json( { message: error.message }));
      })
      .catch(error => res.status(400).json( { message: error.message }));
});


module.exports = router 