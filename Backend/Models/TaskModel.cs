using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class TaskModel
    {
        [Key, Column(TypeName = "int")]
        public int TaskID { get; set; }

        [Column(TypeName = "varchar(50)"), MaxLength(50, ErrorMessage = "Subject limit exceeded"), MinLength(5)]
        public string Subject { get; set; }

        [Column(TypeName = "varchar(10)")]
        public string Priority { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string Status { get; set; }

        [DataType(DataType.Date)]
        public string StartDate { get; set; }

        [DataType(DataType.Date)]
        public string DueDate { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string TaskType { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string AssignedTo { get; set; }

        [Column(TypeName = "varchar(10)")]
        public string EstimatedTime { get; set; }

        [Column(TypeName = "varchar(10)")]
        public string DonePercent { get; set; }

        [Column(TypeName = "varchar(255)"), MaxLength(255, ErrorMessage = "Description limit exceeded")]
        public string Description { get; set; }
    }
}