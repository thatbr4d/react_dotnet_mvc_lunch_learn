// <auto-generated />
using System;
using DNR.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DNR.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20210930171143_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("DNR.Business.DataModels.TestModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("TestValueOne")
                        .HasColumnType("text");

                    b.Property<string>("TestValueTwo")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Test");
                });
#pragma warning restore 612, 618
        }
    }
}
