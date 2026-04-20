type Pokemon = {
  name: string;
  url: string;
};
type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};
type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
export type PokemonForm = {
  form_name: string;
  form_names: string[];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: string[];
  order: number;
  pokemon: Pokemon;
  sprites: Sprites;
  types: PokemonType[];
  version_group: {
    name: string;
    url: string;
  };
};

export type MyLink = {
  api: {
    v2: {
      pokemon$form: (id: number) => {
        GET: () => { res: PokemonForm };
      };
    };
  };
};
