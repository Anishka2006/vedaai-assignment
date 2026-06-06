const Assignment =
  require("../models/Assignment");

const {
  generationQueue,
} = require("../queues/generation.queue");

exports.createAssignment =
  async (req: import('express').Request, res: import('express').Response) => {

    const assignment =
      await Assignment.create({
        title: req.body.title,

        instructions:
          req.body.instructions,
      });

    await generationQueue.add(
      "generate-paper",
      {
        assignmentId:
          assignment._id,

        instructions:
          req.body.instructions,
      }
    );

    res.json(assignment);
  };

exports.getAssignment =
  async (req: import('express').Request, res: import('express').Response) => {

    const assignment =
      await Assignment.findById(
        req.params.id
      );

    res.json(assignment);
  };