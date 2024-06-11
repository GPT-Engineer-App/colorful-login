import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

// Updated types section based on openapi.json spec
/* supabase integration types

Backtest // table: backtest
    id: number
    timestamp: string
    model_version: string

Prediction // table: prediction
    id: number
    coin_id: string
    backtest_id: number
    date: string
    price_direction: string
    confidence_level: string
    percent_change: number
    high: number

CoinHistoricalChartData // table: coin_historical_chart_data
    id: number
    coin_id: string
    timestamp: string
    price: number
    volume: number
    market_cap: number

Coin // table: coin
    id: string
    name: string
    symbol: string
    first_historical_data: string
    last_historical_data: string

Model // table: model
    id: number
    trained_from: string
    trained_until: string
    tested_from: string
    tested_until: string
    percent_precision: number
    false_positives: number
    scaler_storage_path: string
    model_storage_path: string
    is_active: boolean

CoinOhlcHistory // table: coin_ohlc_history
    id: number
    coin_id: string
    timestamp: string
    open: number
    high: number
    low: number
    close: number
    interval: string

CoinPriceHistory // table: coin_price_history
    id: number
    coin_id: string
    timestamp: string
    price: number
    volume: number
    market_cap: number

*/

// Hooks for Backtest table
export const useBacktest = () => useQuery({
    queryKey: ['backtest'],
    queryFn: () => fromSupabase(supabase.from('backtest').select('*')),
});
export const useAddBacktest = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newBacktest) => fromSupabase(supabase.from('backtest').insert([newBacktest])),
        onSuccess: () => {
            queryClient.invalidateQueries('backtest');
        },
    });
};
export const useUpdateBacktest = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedBacktest) => fromSupabase(supabase.from('backtest').update(updatedBacktest).eq('id', updatedBacktest.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('backtest');
        },
    });
};
export const useDeleteBacktest = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('backtest').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('backtest');
        },
    });
};

// Hooks for Prediction table
export const usePrediction = () => useQuery({
    queryKey: ['prediction'],
    queryFn: () => fromSupabase(supabase.from('prediction').select('*')),
});
export const useAddPrediction = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newPrediction) => fromSupabase(supabase.from('prediction').insert([newPrediction])),
        onSuccess: () => {
            queryClient.invalidateQueries('prediction');
        },
    });
};
export const useUpdatePrediction = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedPrediction) => fromSupabase(supabase.from('prediction').update(updatedPrediction).eq('id', updatedPrediction.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('prediction');
        },
    });
};
export const useDeletePrediction = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('prediction').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('prediction');
        },
    });
};

// Hooks for CoinHistoricalChartData table
export const useCoinHistoricalChartData = () => useQuery({
    queryKey: ['coin_historical_chart_data'],
    queryFn: () => fromSupabase(supabase.from('coin_historical_chart_data').select('*')),
});
export const useAddCoinHistoricalChartData = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newData) => fromSupabase(supabase.from('coin_historical_chart_data').insert([newData])),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_historical_chart_data');
        },
    });
};
export const useUpdateCoinHistoricalChartData = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedData) => fromSupabase(supabase.from('coin_historical_chart_data').update(updatedData).eq('id', updatedData.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_historical_chart_data');
        },
    });
};
export const useDeleteCoinHistoricalChartData = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('coin_historical_chart_data').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_historical_chart_data');
        },
    });
};

// Hooks for Coin table
export const useCoin = () => useQuery({
    queryKey: ['coin'],
    queryFn: () => fromSupabase(supabase.from('coin').select('*')),
});
export const useAddCoin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newCoin) => fromSupabase(supabase.from('coin').insert([newCoin])),
        onSuccess: () => {
            queryClient.invalidateQueries('coin');
        },
    });
};
export const useUpdateCoin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedCoin) => fromSupabase(supabase.from('coin').update(updatedCoin).eq('id', updatedCoin.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('coin');
        },
    });
};
export const useDeleteCoin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('coin').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('coin');
        },
    });
};

// Hooks for Model table
export const useModel = () => useQuery({
    queryKey: ['model'],
    queryFn: () => fromSupabase(supabase.from('model').select('*')),
});
export const useAddModel = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newModel) => fromSupabase(supabase.from('model').insert([newModel])),
        onSuccess: () => {
            queryClient.invalidateQueries('model');
        },
    });
};
export const useUpdateModel = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedModel) => fromSupabase(supabase.from('model').update(updatedModel).eq('id', updatedModel.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('model');
        },
    });
};
export const useDeleteModel = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('model').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('model');
        },
    });
};

// Hooks for CoinOhlcHistory table
export const useCoinOhlcHistory = () => useQuery({
    queryKey: ['coin_ohlc_history'],
    queryFn: () => fromSupabase(supabase.from('coin_ohlc_history').select('*')),
});
export const useAddCoinOhlcHistory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newData) => fromSupabase(supabase.from('coin_ohlc_history').insert([newData])),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_ohlc_history');
        },
    });
};
export const useUpdateCoinOhlcHistory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedData) => fromSupabase(supabase.from('coin_ohlc_history').update(updatedData).eq('id', updatedData.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_ohlc_history');
        },
    });
};
export const useDeleteCoinOhlcHistory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('coin_ohlc_history').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_ohlc_history');
        },
    });
};

// Hooks for CoinPriceHistory table
export const useCoinPriceHistory = () => useQuery({
    queryKey: ['coin_price_history'],
    queryFn: () => fromSupabase(supabase.from('coin_price_history').select('*')),
});
export const useAddCoinPriceHistory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newData) => fromSupabase(supabase.from('coin_price_history').insert([newData])),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_price_history');
        },
    });
};
export const useUpdateCoinPriceHistory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedData) => fromSupabase(supabase.from('coin_price_history').update(updatedData).eq('id', updatedData.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_price_history');
        },
    });
};
export const useDeleteCoinPriceHistory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('coin_price_history').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('coin_price_history');
        },
    });
};