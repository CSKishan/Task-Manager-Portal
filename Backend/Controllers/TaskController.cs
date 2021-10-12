using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskContext _context;

        public TaskController(TaskContext context)
        {
            _context = context;
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskModel>>> GetTasks()
        {
            return await _context.Tasks.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskModel>> GetTaskModel(int id)
        {
            var taskModel = await _context.Tasks.FindAsync(id);

            if (taskModel == null)
            {
                return NotFound();
            }

            return taskModel;
        }

        // PUT: api/Task/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskModel(int id, TaskModel taskModel)
        {
            if (id != taskModel.TaskID)
            {
                return BadRequest();
            }

            _context.Entry(taskModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Task
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TaskModel>> PostTaskModel(TaskModel taskModel)
        {
            _context.Tasks.Add(taskModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTaskModel), new { id = taskModel.TaskID }, taskModel);
        }

        // DELETE: api/Task/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskModel(int id)
        {
            var taskModel = await _context.Tasks.FindAsync(id);
            if (taskModel == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(taskModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Route("todotasklist")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskModel>>> GetToDoTasks()
        {
            return await _context.Tasks.Where(p => p.Status == "To-Do")
            .OrderBy(o => o.Priority == "Urgent"? 1 : (o.Priority == "High"? 2 : (o.Priority == "Normal"? 3: 4)))
            .ToListAsync();
        }

        [Route("inprogresstasklist")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskModel>>> GetInProgressTasks()
        {
            return await _context.Tasks.Where(p => p.Status == "In Progress")
            .OrderBy(o => o.Priority == "Urgent"? 1 : (o.Priority == "High"? 2 : (o.Priority == "Normal"? 3: 4)))
            .ToListAsync();
        }

        [Route("completedtasklist")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskModel>>> GetCompletedTasks()
        {
            return await _context.Tasks.Where(p => p.Status == "Completed")
            .OrderBy(o => o.Priority == "Urgent"? 1 : (o.Priority == "High"? 2 : (o.Priority == "Normal"? 3: 4)))
            .ToListAsync();
        }

        private bool TaskModelExists(int id)
        {
            return _context.Tasks.Any(e => e.TaskID == id);
        }
    }
}
