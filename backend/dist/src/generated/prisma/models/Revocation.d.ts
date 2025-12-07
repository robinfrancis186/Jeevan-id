import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RevocationModel = runtime.Types.Result.DefaultSelection<Prisma.$RevocationPayload>;
export type AggregateRevocation = {
    _count: RevocationCountAggregateOutputType | null;
    _min: RevocationMinAggregateOutputType | null;
    _max: RevocationMaxAggregateOutputType | null;
};
export type RevocationMinAggregateOutputType = {
    id: string | null;
    personId: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type RevocationMaxAggregateOutputType = {
    id: string | null;
    personId: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type RevocationCountAggregateOutputType = {
    id: number;
    personId: number;
    reason: number;
    createdAt: number;
    _all: number;
};
export type RevocationMinAggregateInputType = {
    id?: true;
    personId?: true;
    reason?: true;
    createdAt?: true;
};
export type RevocationMaxAggregateInputType = {
    id?: true;
    personId?: true;
    reason?: true;
    createdAt?: true;
};
export type RevocationCountAggregateInputType = {
    id?: true;
    personId?: true;
    reason?: true;
    createdAt?: true;
    _all?: true;
};
export type RevocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevocationWhereInput;
    orderBy?: Prisma.RevocationOrderByWithRelationInput | Prisma.RevocationOrderByWithRelationInput[];
    cursor?: Prisma.RevocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RevocationCountAggregateInputType;
    _min?: RevocationMinAggregateInputType;
    _max?: RevocationMaxAggregateInputType;
};
export type GetRevocationAggregateType<T extends RevocationAggregateArgs> = {
    [P in keyof T & keyof AggregateRevocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRevocation[P]> : Prisma.GetScalarType<T[P], AggregateRevocation[P]>;
};
export type RevocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevocationWhereInput;
    orderBy?: Prisma.RevocationOrderByWithAggregationInput | Prisma.RevocationOrderByWithAggregationInput[];
    by: Prisma.RevocationScalarFieldEnum[] | Prisma.RevocationScalarFieldEnum;
    having?: Prisma.RevocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RevocationCountAggregateInputType | true;
    _min?: RevocationMinAggregateInputType;
    _max?: RevocationMaxAggregateInputType;
};
export type RevocationGroupByOutputType = {
    id: string;
    personId: string;
    reason: string | null;
    createdAt: Date;
    _count: RevocationCountAggregateOutputType | null;
    _min: RevocationMinAggregateOutputType | null;
    _max: RevocationMaxAggregateOutputType | null;
};
type GetRevocationGroupByPayload<T extends RevocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RevocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RevocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RevocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RevocationGroupByOutputType[P]>;
}>>;
export type RevocationWhereInput = {
    AND?: Prisma.RevocationWhereInput | Prisma.RevocationWhereInput[];
    OR?: Prisma.RevocationWhereInput[];
    NOT?: Prisma.RevocationWhereInput | Prisma.RevocationWhereInput[];
    id?: Prisma.StringFilter<"Revocation"> | string;
    personId?: Prisma.StringFilter<"Revocation"> | string;
    reason?: Prisma.StringNullableFilter<"Revocation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Revocation"> | Date | string;
    person?: Prisma.XOR<Prisma.PersonScalarRelationFilter, Prisma.PersonWhereInput>;
};
export type RevocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    person?: Prisma.PersonOrderByWithRelationInput;
};
export type RevocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RevocationWhereInput | Prisma.RevocationWhereInput[];
    OR?: Prisma.RevocationWhereInput[];
    NOT?: Prisma.RevocationWhereInput | Prisma.RevocationWhereInput[];
    personId?: Prisma.StringFilter<"Revocation"> | string;
    reason?: Prisma.StringNullableFilter<"Revocation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Revocation"> | Date | string;
    person?: Prisma.XOR<Prisma.PersonScalarRelationFilter, Prisma.PersonWhereInput>;
}, "id">;
export type RevocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RevocationCountOrderByAggregateInput;
    _max?: Prisma.RevocationMaxOrderByAggregateInput;
    _min?: Prisma.RevocationMinOrderByAggregateInput;
};
export type RevocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.RevocationScalarWhereWithAggregatesInput | Prisma.RevocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.RevocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RevocationScalarWhereWithAggregatesInput | Prisma.RevocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Revocation"> | string;
    personId?: Prisma.StringWithAggregatesFilter<"Revocation"> | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"Revocation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Revocation"> | Date | string;
};
export type RevocationCreateInput = {
    id?: string;
    reason?: string | null;
    createdAt?: Date | string;
    person: Prisma.PersonCreateNestedOneWithoutRevocationsInput;
};
export type RevocationUncheckedCreateInput = {
    id?: string;
    personId: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RevocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    person?: Prisma.PersonUpdateOneRequiredWithoutRevocationsNestedInput;
};
export type RevocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevocationCreateManyInput = {
    id?: string;
    personId: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RevocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevocationListRelationFilter = {
    every?: Prisma.RevocationWhereInput;
    some?: Prisma.RevocationWhereInput;
    none?: Prisma.RevocationWhereInput;
};
export type RevocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RevocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RevocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RevocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RevocationCreateNestedManyWithoutPersonInput = {
    create?: Prisma.XOR<Prisma.RevocationCreateWithoutPersonInput, Prisma.RevocationUncheckedCreateWithoutPersonInput> | Prisma.RevocationCreateWithoutPersonInput[] | Prisma.RevocationUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.RevocationCreateOrConnectWithoutPersonInput | Prisma.RevocationCreateOrConnectWithoutPersonInput[];
    createMany?: Prisma.RevocationCreateManyPersonInputEnvelope;
    connect?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
};
export type RevocationUncheckedCreateNestedManyWithoutPersonInput = {
    create?: Prisma.XOR<Prisma.RevocationCreateWithoutPersonInput, Prisma.RevocationUncheckedCreateWithoutPersonInput> | Prisma.RevocationCreateWithoutPersonInput[] | Prisma.RevocationUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.RevocationCreateOrConnectWithoutPersonInput | Prisma.RevocationCreateOrConnectWithoutPersonInput[];
    createMany?: Prisma.RevocationCreateManyPersonInputEnvelope;
    connect?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
};
export type RevocationUpdateManyWithoutPersonNestedInput = {
    create?: Prisma.XOR<Prisma.RevocationCreateWithoutPersonInput, Prisma.RevocationUncheckedCreateWithoutPersonInput> | Prisma.RevocationCreateWithoutPersonInput[] | Prisma.RevocationUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.RevocationCreateOrConnectWithoutPersonInput | Prisma.RevocationCreateOrConnectWithoutPersonInput[];
    upsert?: Prisma.RevocationUpsertWithWhereUniqueWithoutPersonInput | Prisma.RevocationUpsertWithWhereUniqueWithoutPersonInput[];
    createMany?: Prisma.RevocationCreateManyPersonInputEnvelope;
    set?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
    disconnect?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
    delete?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
    connect?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
    update?: Prisma.RevocationUpdateWithWhereUniqueWithoutPersonInput | Prisma.RevocationUpdateWithWhereUniqueWithoutPersonInput[];
    updateMany?: Prisma.RevocationUpdateManyWithWhereWithoutPersonInput | Prisma.RevocationUpdateManyWithWhereWithoutPersonInput[];
    deleteMany?: Prisma.RevocationScalarWhereInput | Prisma.RevocationScalarWhereInput[];
};
export type RevocationUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: Prisma.XOR<Prisma.RevocationCreateWithoutPersonInput, Prisma.RevocationUncheckedCreateWithoutPersonInput> | Prisma.RevocationCreateWithoutPersonInput[] | Prisma.RevocationUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.RevocationCreateOrConnectWithoutPersonInput | Prisma.RevocationCreateOrConnectWithoutPersonInput[];
    upsert?: Prisma.RevocationUpsertWithWhereUniqueWithoutPersonInput | Prisma.RevocationUpsertWithWhereUniqueWithoutPersonInput[];
    createMany?: Prisma.RevocationCreateManyPersonInputEnvelope;
    set?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
    disconnect?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
    delete?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
    connect?: Prisma.RevocationWhereUniqueInput | Prisma.RevocationWhereUniqueInput[];
    update?: Prisma.RevocationUpdateWithWhereUniqueWithoutPersonInput | Prisma.RevocationUpdateWithWhereUniqueWithoutPersonInput[];
    updateMany?: Prisma.RevocationUpdateManyWithWhereWithoutPersonInput | Prisma.RevocationUpdateManyWithWhereWithoutPersonInput[];
    deleteMany?: Prisma.RevocationScalarWhereInput | Prisma.RevocationScalarWhereInput[];
};
export type RevocationCreateWithoutPersonInput = {
    id?: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RevocationUncheckedCreateWithoutPersonInput = {
    id?: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RevocationCreateOrConnectWithoutPersonInput = {
    where: Prisma.RevocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RevocationCreateWithoutPersonInput, Prisma.RevocationUncheckedCreateWithoutPersonInput>;
};
export type RevocationCreateManyPersonInputEnvelope = {
    data: Prisma.RevocationCreateManyPersonInput | Prisma.RevocationCreateManyPersonInput[];
    skipDuplicates?: boolean;
};
export type RevocationUpsertWithWhereUniqueWithoutPersonInput = {
    where: Prisma.RevocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.RevocationUpdateWithoutPersonInput, Prisma.RevocationUncheckedUpdateWithoutPersonInput>;
    create: Prisma.XOR<Prisma.RevocationCreateWithoutPersonInput, Prisma.RevocationUncheckedCreateWithoutPersonInput>;
};
export type RevocationUpdateWithWhereUniqueWithoutPersonInput = {
    where: Prisma.RevocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.RevocationUpdateWithoutPersonInput, Prisma.RevocationUncheckedUpdateWithoutPersonInput>;
};
export type RevocationUpdateManyWithWhereWithoutPersonInput = {
    where: Prisma.RevocationScalarWhereInput;
    data: Prisma.XOR<Prisma.RevocationUpdateManyMutationInput, Prisma.RevocationUncheckedUpdateManyWithoutPersonInput>;
};
export type RevocationScalarWhereInput = {
    AND?: Prisma.RevocationScalarWhereInput | Prisma.RevocationScalarWhereInput[];
    OR?: Prisma.RevocationScalarWhereInput[];
    NOT?: Prisma.RevocationScalarWhereInput | Prisma.RevocationScalarWhereInput[];
    id?: Prisma.StringFilter<"Revocation"> | string;
    personId?: Prisma.StringFilter<"Revocation"> | string;
    reason?: Prisma.StringNullableFilter<"Revocation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Revocation"> | Date | string;
};
export type RevocationCreateManyPersonInput = {
    id?: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RevocationUpdateWithoutPersonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevocationUncheckedUpdateWithoutPersonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevocationUncheckedUpdateManyWithoutPersonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personId?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revocation"]>;
export type RevocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personId?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revocation"]>;
export type RevocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personId?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revocation"]>;
export type RevocationSelectScalar = {
    id?: boolean;
    personId?: boolean;
    reason?: boolean;
    createdAt?: boolean;
};
export type RevocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personId" | "reason" | "createdAt", ExtArgs["result"]["revocation"]>;
export type RevocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
};
export type RevocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
};
export type RevocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
};
export type $RevocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Revocation";
    objects: {
        person: Prisma.$PersonPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personId: string;
        reason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["revocation"]>;
    composites: {};
};
export type RevocationGetPayload<S extends boolean | null | undefined | RevocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RevocationPayload, S>;
export type RevocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RevocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RevocationCountAggregateInputType | true;
};
export interface RevocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Revocation'];
        meta: {
            name: 'Revocation';
        };
    };
    findUnique<T extends RevocationFindUniqueArgs>(args: Prisma.SelectSubset<T, RevocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RevocationClient<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RevocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RevocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevocationClient<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RevocationFindFirstArgs>(args?: Prisma.SelectSubset<T, RevocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__RevocationClient<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RevocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RevocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevocationClient<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RevocationFindManyArgs>(args?: Prisma.SelectSubset<T, RevocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RevocationCreateArgs>(args: Prisma.SelectSubset<T, RevocationCreateArgs<ExtArgs>>): Prisma.Prisma__RevocationClient<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RevocationCreateManyArgs>(args?: Prisma.SelectSubset<T, RevocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RevocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RevocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RevocationDeleteArgs>(args: Prisma.SelectSubset<T, RevocationDeleteArgs<ExtArgs>>): Prisma.Prisma__RevocationClient<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RevocationUpdateArgs>(args: Prisma.SelectSubset<T, RevocationUpdateArgs<ExtArgs>>): Prisma.Prisma__RevocationClient<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RevocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, RevocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RevocationUpdateManyArgs>(args: Prisma.SelectSubset<T, RevocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RevocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RevocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RevocationUpsertArgs>(args: Prisma.SelectSubset<T, RevocationUpsertArgs<ExtArgs>>): Prisma.Prisma__RevocationClient<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RevocationCountArgs>(args?: Prisma.Subset<T, RevocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RevocationCountAggregateOutputType> : number>;
    aggregate<T extends RevocationAggregateArgs>(args: Prisma.Subset<T, RevocationAggregateArgs>): Prisma.PrismaPromise<GetRevocationAggregateType<T>>;
    groupBy<T extends RevocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RevocationGroupByArgs['orderBy'];
    } : {
        orderBy?: RevocationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RevocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RevocationFieldRefs;
}
export interface Prisma__RevocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    person<T extends Prisma.PersonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PersonDefaultArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RevocationFieldRefs {
    readonly id: Prisma.FieldRef<"Revocation", 'String'>;
    readonly personId: Prisma.FieldRef<"Revocation", 'String'>;
    readonly reason: Prisma.FieldRef<"Revocation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Revocation", 'DateTime'>;
}
export type RevocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    where: Prisma.RevocationWhereUniqueInput;
};
export type RevocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    where: Prisma.RevocationWhereUniqueInput;
};
export type RevocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    where?: Prisma.RevocationWhereInput;
    orderBy?: Prisma.RevocationOrderByWithRelationInput | Prisma.RevocationOrderByWithRelationInput[];
    cursor?: Prisma.RevocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevocationScalarFieldEnum | Prisma.RevocationScalarFieldEnum[];
};
export type RevocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    where?: Prisma.RevocationWhereInput;
    orderBy?: Prisma.RevocationOrderByWithRelationInput | Prisma.RevocationOrderByWithRelationInput[];
    cursor?: Prisma.RevocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevocationScalarFieldEnum | Prisma.RevocationScalarFieldEnum[];
};
export type RevocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    where?: Prisma.RevocationWhereInput;
    orderBy?: Prisma.RevocationOrderByWithRelationInput | Prisma.RevocationOrderByWithRelationInput[];
    cursor?: Prisma.RevocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevocationScalarFieldEnum | Prisma.RevocationScalarFieldEnum[];
};
export type RevocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevocationCreateInput, Prisma.RevocationUncheckedCreateInput>;
};
export type RevocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RevocationCreateManyInput | Prisma.RevocationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RevocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    data: Prisma.RevocationCreateManyInput | Prisma.RevocationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RevocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RevocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevocationUpdateInput, Prisma.RevocationUncheckedUpdateInput>;
    where: Prisma.RevocationWhereUniqueInput;
};
export type RevocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RevocationUpdateManyMutationInput, Prisma.RevocationUncheckedUpdateManyInput>;
    where?: Prisma.RevocationWhereInput;
    limit?: number;
};
export type RevocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevocationUpdateManyMutationInput, Prisma.RevocationUncheckedUpdateManyInput>;
    where?: Prisma.RevocationWhereInput;
    limit?: number;
    include?: Prisma.RevocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RevocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    where: Prisma.RevocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RevocationCreateInput, Prisma.RevocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RevocationUpdateInput, Prisma.RevocationUncheckedUpdateInput>;
};
export type RevocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    where: Prisma.RevocationWhereUniqueInput;
};
export type RevocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevocationWhereInput;
    limit?: number;
};
export type RevocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
};
export {};
