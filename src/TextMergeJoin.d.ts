export declare namespace TextMergeJoin {
    interface IPDFTextWord {
        readonly pageNum: number;
        readonly x: number;
        readonly y: number;
        readonly width: number;
        readonly height: number;
        readonly str: string;
    }
    function doMergeWords(data: ReadonlyArray<IPDFTextWord>): ReadonlyArray<IPDFTextWord>;
}
