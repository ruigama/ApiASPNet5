using AutoMapper;
using Clientes.Data;
using Filmes.Data.Dtos.FornecedorDto;
using Fornecedores.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Fornecedores.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FornecedorController : ControllerBase
    {
        private ClienteContext _context;
        private IMapper _mapper;

        public FornecedorController(ClienteContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult AdicionarFornecedor([FromBody] CreateFornecedorDto createFornecedorDto)
        {
            Fornecedor fornecedor = _mapper.Map<Fornecedor>(createFornecedorDto);
            _context.Fornecedores.Add(fornecedor);
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet]
        public IEnumerable<Fornecedor> RecuperaCliente()
        {
            return _context.Fornecedores;
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaClientePorId(int id)
        {
            Fornecedor fornecedor = _context.Fornecedores.FirstOrDefault(fornecedor => fornecedor.Id == id);

            if (fornecedor != null)
            {
                ReadFornecedorDto createFornecedorDto = _mapper.Map<ReadFornecedorDto>(fornecedor);
                return Ok(createFornecedorDto);
            }
            return NotFound();
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarCliente(int id, [FromBody] UpdateFornecedorDto createFornecedorDto)
        {
            Fornecedor fornecedor = _context.Fornecedores.FirstOrDefault(fornecedor => fornecedor.Id == id);

            if (fornecedor == null)
            {
                return NotFound();
            }
            _mapper.Map(createFornecedorDto, fornecedor);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarFornecedor(int id)
        {
            Fornecedor fornecedor = _context.Fornecedores.FirstOrDefault(fornecedor => fornecedor.Id == id);

            if (fornecedor == null)
            {
                return NotFound();
            }
            _context.Remove(fornecedor);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
