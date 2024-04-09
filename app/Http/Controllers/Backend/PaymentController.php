<?php

namespace App\Http\Controllers\Backend;

use App\Models\Payment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Payment::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'name'=>'required',
        //     'Amount_in_BIRR	'=>'required',
        //     'Amount_in_USD'=>'required',
        // ]);
        $payment=new Payment();
        $payment->name=$request->name;
        $payment->Amount_in_USD=$request->Amount_in_USD;
        $payment->Amount_in_BIRR=$request->Amount_in_BIRR;
        $payment->save();
        return response()->Json(['mesage'=>'data inserted successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // dd('hello');
        return Payment::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // dd('edit');
      return  $payment=Payment::find($id);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd('update');
       $payment=Payment::find($id);
        $payment->name=$request->name;
        $payment->Amount_in_BIRR=$request->Amount_in_BIRR;
        $payment->Amount_in_USD=$request->Amount_in_USD;
        $payment->update();
        return response()->Json(['message'=>'data updated successfully']);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
           $payment=Payment::find($id);
           $payment->delete();
           return response()->Json(['message'=>'data deleted successfully']);
    }
}
