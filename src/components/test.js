<div className="w-full h-auto min-h-screen flex flex-col items-center justify-center">

  <div className="w-full py-2 flex gap-2 justify-center align-middle mb-4 mt-4">

    <Typography variant="h3">

      Tambahkan Menu Baru

    </Typography>

  </div>



  <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 \n			flex flex-col items-center justify-center gap-4">



    {fields && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${"danger" === alertStatus ? "bg-red-400 text-red-800" : "bg-emerald-400 text-emerald-800"}`}>

      {msg}

    </motion.p>}



    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">

      <MdFastfood className="text-xl text-gray-700" />

      <input type="text" requiredvalue={nama} placeholder="Masukkan nama menu.." onChange={e => setNama(e.target.value)} className="w-full h-full text-lg bg-transparent font-semibold p-1">



      </input>

    </div>



    <div className="w-full">

      <select className="w-full outline-none text-base border-b-2 \n					border-gray-200 p-2 rounded-md cursor-pointer" id="select-kategori" onChange={e => { setCategory(e.target.value) }}>

        <option value="other" className="bg-white">

          Pilih Kategori

        </option>

        {categories && categories.map(e => <option key={e.id} className="text-base border-0 outline-none capitalize bg-white" value={e.urlParamName}>

          {e.name}

        </option>)}

      </select>

    </div>



    <div className=" group flex justify-center items-center flex-col border-2\n				border-dotted border-gray-300 w-full h-[30rem] xs:h-[15rem] md:h-[30rem] \n				cursor-pointer rounded-lg">

      {isLoading ? <Loader /> : <>

        {imageAsset ? <>



          <div className="relative h-full">

            <img src={imageAsset} alt="uploaded" className="w-full h-full object-cover" />



            <button type="button" className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500\n						text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out" onClick={deleteImage}>

              <MdDelete className="text-white" />

            </button>



          </div>



        </> : <>

          <label className="w-full h-full flex flex-col items-center justify-center\n						cursor-pointer ">

            <div className="w-full h-full flex flex-col items-center justify-center\n							cursor-pointer ">

              <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />

              <p className="text-gray-500 hover:text-gray-700">Klik untuk upload</p>

            </div>

            <input type="file" name="uploadimage" accept="image/*" onChange={uploadImage} className=" w-0 h-0"></input>

          </label>

        </>}

      </>}

    </div>



    <div className="w-full flex flex-col md:flex-row items-center gap-3">

      <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">

        <MdAttachMoney className="text-gray-700 text-2xl" />

        <input type="text" requiredvalue={harga} onChange={e => setHarga(e.target.value)} placeholder="Harga" className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400" />

      </div>

    </div>



    <div className="flex item-center w-full">



      {isUpdate ? <div className="justify-end align-middle">

        <button type="button" className=" ml-0 md:ml-auto w-full md:w-auto border-none\n					outline-none bg-blue-500 px-12 py-2 rounded-lg text-lg text-white font-semibold" onClick={() => updateDetails(id)}>Update

        </button>



        <button type="button" className=" ml-0 md:ml-auto w-full md:w-auto border-none\n					outline-none bg-red-500 px-12 py-2 rounded-lg text-lg text-white font-semibold" onClick={clearData}>Cancel</button>

      </div> : <button type="button" className=" ml-0 md:ml-auto w-full md:w-auto border-none\n					outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold" onClick={saveDetails}>Simpan</button>}



    </div>

  </div>



  <div className="w-full py-2 flex gap-2 justify-center align-middle mb-4 mt-7">

    <Typography variant="h3">

      Update Menu yang Ada

    </Typography>

  </div>





  <RowContainer data={foodItems} setNama={setNama} setCategory={setCategory} setImageAsset={setImageAsset} setHarga={setHarga} setIsLoading={setIsLoading} setisUpdate={setisUpdate} setId={setId} />

</div>;