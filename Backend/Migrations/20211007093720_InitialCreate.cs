using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    TaskID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Subject = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: true),
                    Priority = table.Column<string>(type: "varchar(10)", nullable: true),
                    Status = table.Column<string>(type: "varchar(20)", nullable: true),
                    StartDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DueDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TaskType = table.Column<string>(type: "varchar(20)", nullable: true),
                    AssignedTo = table.Column<string>(type: "varchar(20)", nullable: true),
                    EstimatedTime = table.Column<string>(type: "varchar(10)", nullable: true),
                    DonePercent = table.Column<string>(type: "varchar(10)", nullable: true),
                    Description = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.TaskID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tasks");
        }
    }
}
