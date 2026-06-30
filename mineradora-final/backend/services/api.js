import { supabase } from '../config/supabaseClient.js'

export const equipamentoService = {
  listar: async () => {
    return await supabase.from('equipamentos').select('*')
  },
  criar: async (equipamento) => {
    return await supabase.from('equipamentos').insert([equipamento]).select()
  },
  atualizar: async (id, dados) => {
    return await supabase.from('equipamentos').update(dados).eq('id', id).select()
  },
  deletar: async (id) => {
    return await supabase.from('equipamentos').delete().eq('id', id).select()
  }
}

