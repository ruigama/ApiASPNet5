using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Clientes.Models;
using System;
using System.Linq;
using Clientes.Data;
using AutoMapper;
using Filmes.Data.Dtos.ClienteDto;

namespace Clientes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : ControllerBase
    {
        private ClienteContext _context;
        private IMapper _mapper;

        public ClienteController(ClienteContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult AdicionarCliente([FromBody] CreateClienteDto clienteDto)
        {
            Cliente cliente = _mapper.Map<Cliente>(clienteDto);

            _context.Clientes.Add(cliente);
            _context.SaveChanges();
            return CreatedAtAction(nameof(RecuperaClientePorId), new { Id = cliente.Id }, cliente);
        }

        [HttpGet]
        public IEnumerable<Cliente> RecuperaCliente()
        {
            return _context.Clientes;
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaClientePorId(int id)
        {
            Cliente cliente = _context.Clientes.FirstOrDefault(cliente => cliente.Id == id);

            if(cliente != null)
            {
                ReadClienteDto clienteDto = _mapper.Map<ReadClienteDto>(cliente);
                return Ok(clienteDto);
            }
            return NotFound();
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarCliente(int id, [FromBody] UpdateClienteDto clienteDto)
        {
            Cliente cliente = _context.Clientes.FirstOrDefault(cliente => cliente.Id == id);

            if(cliente == null)
            {
                return NotFound();
            }
            _mapper.Map(clienteDto, cliente);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarCliente(int id)
        {
            Cliente cliente = _context.Clientes.FirstOrDefault(cliente => cliente.Id == id);

            if (cliente == null)
            {
                return NotFound();
            }
            _context.Remove(cliente);
            _context.SaveChanges();
            return NoContent();
        }
    }

    
}
