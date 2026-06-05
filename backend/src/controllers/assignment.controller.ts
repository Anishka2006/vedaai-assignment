const AssignmentModel = require("../models/Assignment");

const { generationQueue } = require("../queues/generation.queue");

const createAssignment =
async (
 req: any,
 res: any
) => {

 const assignment =
 await AssignmentModel.create(
   req.body
 );

 await generationQueue.add(
   "generate",
   {
     assignmentId:
       assignment._id,
   }
 );

 return res.json(
   assignment
 );
};

module.exports = { createAssignment };