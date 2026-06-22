import { supabase } from '../config/supabaseClient'

export const equipamentoService = {
  listar: async () => {
    return await supabase.from('equipamentos').select('*')
  },
  criar: async (equipamento) => {
    return await supabase.from('equipamentos').insert([equipamento])
  }
}
